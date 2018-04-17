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
    [Route("api/Locations")]
    public class LocationsController : Controller
    {
        private readonly DatabaseContext _context;

        public LocationsController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet("[action]")]
        public IEnumerable<Location> GetLugares()
        {
            return _context.Lugares;
        }

       
        [HttpGet("{id}")]
        public async Task<IActionResult> GetLocation([FromRoute] int id)
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

       
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLocation([FromRoute] int id, [FromBody] Suspension suspension)
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


        [HttpPost("[action]")]
        public async Task<IActionResult> PostLocation([FromBody] Location location)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            _context.Lugares.Add(location);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index","Home");
        }

        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocation([FromRoute] int id)
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