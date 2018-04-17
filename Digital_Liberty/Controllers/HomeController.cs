using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Digital_Liberty.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Digital_Liberty.Controllers
{
  
    public class HomeController : Controller
    {
        private readonly DatabaseContext _context;
        private IConfiguration _config;

        public HomeController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Index()
        {
            var tienda = HttpContext.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Country)?.Value;

                return View("Index");
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Public()
        {
            var tienda = HttpContext.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Country)?.Value;

            return View("Public");
        }

        [HttpPost]
        public async Task<IActionResult> Index(User user)
        {
            IActionResult response = Unauthorized();
            if (ModelState.IsValid)
            {
                User usuarioAutenticado = await ObtieneUsuarioBD(user);

                if (usuarioAutenticado == null)
                {
                    return ErrorUsuario();
                }

                bool isValid = ValidaUsuario(user, usuarioAutenticado);

                if (!isValid)
                {
                    return ErrorUsuario();
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
            var claims = new List<Claim>
            {
                new Claim("Usuario", usuarioAutenticado.Tienda),
            };
            var claimsIdentity = new ClaimsIdentity(
    claims);
            return claimsIdentity;
        }

        private async Task AutenticaIdentidad(ClaimsIdentity identity)
        {
            var authProperties = new Microsoft.AspNetCore.Authentication.AuthenticationProperties
            {
                IsPersistent = true,
                ExpiresUtc = DateTime.UtcNow.AddMinutes(30)

            };

            // Autenticamos usando Identity
            await HttpContext.SignInAsync(
    new ClaimsPrincipal(identity),
    authProperties);
        }

        public IActionResult Dashboard()
        {
            return View("Index");
        }
    }
}