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

        public HomeController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Index()
        {

                return View("Index");
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Public()
        {

            return View("Public");
        }

        private IActionResult ErrorUsuario()
        {
            ModelState.AddModelError("", "El usuario o la contraseña son incorrectos.");
            return View();
        }

        public IActionResult Dashboard()
        {
            return View("Index");
        }
    }
}