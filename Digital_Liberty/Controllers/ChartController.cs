using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Digital_Liberty.Models;

namespace Digital_Liberty.Controllers
{
    [Produces("application/json")]
    [Route("api/Chart")]
    public class ChartController : Controller
    {
        private readonly DatabaseContext _context;

        public ChartController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetCivilStatus()
        {
            var groupedStatus = _context.Beneficiarios.GroupBy(c => c.CivilStatus)
                .Select(g => new
                {
                    name = g.Key,
                    count = g.Count(),
                }).
                OrderBy(c => c.name);

            return Json(groupedStatus);
        }

        // GET: api/People/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPerson([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var person = await _context.Beneficiarios.SingleOrDefaultAsync(m => m.Document == id);

            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }
        // GET: api/People/5
        [HttpGet("[action]")]
        public async Task<IActionResult> Test()
        {
            return View();
        }

        // PUT: api/People/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerson([FromRoute] int id, [FromBody] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.ID)
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
                if (!PersonExists(id))
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

        // POST: api/People
        [HttpPost]
        public async Task<IActionResult> PostPerson([FromBody] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

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

        private bool PersonExists(int id)
        {
            return _context.Beneficiarios.Any(e => e.ID == id);
        }
    }
}