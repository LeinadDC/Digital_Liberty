using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Digital_Liberty.Models;

namespace Digital_Liberty.Controllers
{
    public class Suspensions1Controller : Controller
    {
        private readonly DatabaseContext _context;

        public Suspensions1Controller(DatabaseContext context)
        {
            _context = context;
        }

        // GET: Suspensions1
        public async Task<IActionResult> Index()
        {
            return View(await _context.Suspensiones.ToListAsync());
        }

        // GET: Suspensions1/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var suspension = await _context.Suspensiones
                .SingleOrDefaultAsync(m => m.ID == id);
            if (suspension == null)
            {
                return NotFound();
            }

            return View(suspension);
        }

        // GET: Suspensions1/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Suspensions1/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,Description,SuspensionDate")] Suspension suspension)
        {
            if (ModelState.IsValid)
            {
                _context.Add(suspension);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(suspension);
        }

        // GET: Suspensions1/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var suspension = await _context.Suspensiones.SingleOrDefaultAsync(m => m.ID == id);
            if (suspension == null)
            {
                return NotFound();
            }
            return View(suspension);
        }

        // POST: Suspensions1/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Description,SuspensionDate")] Suspension suspension)
        {
            if (id != suspension.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(suspension);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!SuspensionExists(suspension.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(suspension);
        }

        // GET: Suspensions1/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var suspension = await _context.Suspensiones
                .SingleOrDefaultAsync(m => m.ID == id);
            if (suspension == null)
            {
                return NotFound();
            }

            return View(suspension);
        }

        // POST: Suspensions1/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var suspension = await _context.Suspensiones.SingleOrDefaultAsync(m => m.ID == id);
            _context.Suspensiones.Remove(suspension);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool SuspensionExists(int id)
        {
            return _context.Suspensiones.Any(e => e.ID == id);
        }
    }
}
