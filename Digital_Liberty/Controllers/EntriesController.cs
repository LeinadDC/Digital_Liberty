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
    [Route("api/Entries")]
    public class EntriesController : Controller
    {
        private readonly DatabaseContext _context;

        public EntriesController(DatabaseContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public IEnumerable<Entry> GetIngresos()
        {
            return _context.Ingresos;
        }

        // GET: api/Entries/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEntry([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var suspension = await _context.Ingresos.SingleOrDefaultAsync(m => m.ID == id);

            if (suspension == null)
            {
                return NotFound();
            }

            return Ok(suspension);
        }

        // PUT: api/Suspensions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEntry([FromRoute] int id, [FromBody] Suspension suspension)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != suspension.ID)
            {
                return BadRequest();
            }

            _context.Entry(suspension).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SuspensionExists(id))
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

        // POST: api/Suspensions
        [HttpPost]
        public async Task<IActionResult> PostEntry([FromForm] Entry entry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _context.Ingresos.Add(entry);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index","Home");
        }

        // DELETE: api/Suspensions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntry([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var suspension = await _context.Ingresos.SingleOrDefaultAsync(m => m.ID == id);
            if (suspension == null)
            {
                return NotFound();
            }

            _context.Ingresos.Remove(suspension);
            await _context.SaveChangesAsync();

            return Ok(suspension);
        }

        private bool SuspensionExists(int id)
        {
            return _context.Ingresos.Any(e => e.ID == id);
        }
    }
}