using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Digital_Liberty.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace Digital_Liberty.Controllers
{
    [Produces("application/json")]
    [Route("api/People")]
    public class PeopleController : Controller
    {
        private readonly DatabaseContext _context;

        public PeopleController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
   
        public IEnumerable<Person> GetBeneficiarios()
        {
            var tienda = HttpContext.User;
            return _context.Beneficiarios.Include(m => m.Location);
        }

        // GET: api/People/5
        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetPerson([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var person =  _context.Beneficiarios.Include(m => m.Location).FirstOrDefault(m => m.Document == id);

            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }

        // GET: api/People/5
        [HttpGet("issues/{id:int}")]
        public async Task<IActionResult> GetPersonIssues([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var personIssues =  _context.Problemas.Where(m => m.PersonID == id);

            if (personIssues == null)
            {
                return NotFound();
            }

            return Ok(personIssues);
        }

        // GET: api/People/5
        [HttpGet("[action]")]
        public async Task<IActionResult> Test()
        {
            return View();
        }

        // PUT: api/People/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerson([FromRoute] string document, [FromForm] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (document != person.Document)
            {
                return BadRequest();
            }

            _context.Entry(person).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(document))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToAction("Index", "Home");
        }

        // POST: api/People
        [HttpPost]
        public async Task<IActionResult> PostPerson([FromBody] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //agregar loop aqui agregar un registro a la tabla Problemas 
            _context.Beneficiarios.Add(person);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerson", new { id = person.ID }, person);
        }

        // DELETE: api/People/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePerson([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var person = await _context.Beneficiarios.SingleOrDefaultAsync(m => m.ID == id);
            if (person == null)
            {
                return NotFound();
            }

            _context.Beneficiarios.Remove(person);
            await _context.SaveChangesAsync();

            return Ok(person);
        }

        private bool PersonExists(string document)
        {
            return _context.Beneficiarios.Any(e => e.Document == document);
        }
    }
}