using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Digital_Liberty.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Authentication;

namespace Digital_Liberty.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        private readonly DatabaseContext _context;

        public UsersController(DatabaseContext context)
        {
            _context = context;
        }

        //POST: LogIn
        [HttpPost("[action]")]
        public async Task<IActionResult> LogIn([FromBody]User usuario)
        {
            if (ModelState.IsValid)
            {
                User usuarioAutenticado = await ObtieneUsuarioBD(usuario);

                if (usuarioAutenticado == null)
                {
                    return ErrorUsuario();
                }

                bool isValid = ValidaUsuario(usuario, usuarioAutenticado);

                if (!isValid)
                {
                    return ErrorUsuario();
                }

                ClaimsIdentity identity = CreaIdentidadUsuario(usuarioAutenticado);

                await AutenticaIdentidad(identity);

                return RedirectToAction("Index", "Home");
            }

            return View();

        }

        private IActionResult ErrorUsuario()
        {
            ModelState.AddModelError("", "El usuario o la contraseña son incorrectos.");
            return View();
        }

        private async Task<User> ObtieneUsuarioBD(User usuario)
        {
            var usuarioBD = _context.Usuarios.SingleOrDefaultAsync(m => m.NombreUsuario == usuario.NombreUsuario);

            return await usuarioBD;
        }

        private static bool ValidaUsuario(User usuario, User usuarioAutenticado)
        {
            return (usuario.NombreUsuario == usuarioAutenticado.NombreUsuario && usuario.Password == usuarioAutenticado.Password);
        }

        private static ClaimsIdentity CreaIdentidadUsuario(User usuarioAutenticado)
        {
            // Creamos Identity basada en la información del usuario. 
            var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme, ClaimTypes.Name, ClaimTypes.Role);
            identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, usuarioAutenticado.NombreUsuario));
            identity.AddClaim(new Claim(ClaimTypes.Country, usuarioAutenticado.Tienda));
            return identity;
        }

        private async Task AutenticaIdentidad(ClaimsIdentity identity)
        {
            // Autenticamos usando Identity
            var principal = new ClaimsPrincipal(identity);
            await HttpContext.SignInAsync(
                 CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(identity),
                    new Microsoft.AspNetCore.Authentication.AuthenticationProperties
                    {
                        IsPersistent = true,
                        ExpiresUtc = DateTime.UtcNow.AddMinutes(30)
                    });
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Usuarios.SingleOrDefaultAsync(m => m.ID == id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser([FromRoute] int id, [FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.ID)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        private bool UserExists(int id)
        {
            return _context.Usuarios.Any(e => e.ID == id);
        }
    }
}