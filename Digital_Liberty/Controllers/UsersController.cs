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
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;

namespace Digital_Liberty.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        private readonly DatabaseContext _context;
        private IConfiguration _config;

        public UsersController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        //POST: LogIn
        [HttpPost("[action]")]
        public async Task<IActionResult> LogIn([FromBody]User user)
        {
            IActionResult response = Unauthorized();
            if (ModelState.IsValid)
            {
                User usuarioAutenticado = await ObtieneUsuarioBD(user);

                if (usuarioAutenticado == null)
                {
                    return response;
                }

                bool isValid = ValidaUsuario(user, usuarioAutenticado);

                if (!isValid)
                {
                    return response;
                }

                var tokenString = BuildToken(user);

                response = Ok(new { token = tokenString });
            }

            return response;

        }
        private string BuildToken(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
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