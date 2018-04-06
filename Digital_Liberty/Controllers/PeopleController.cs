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
    [Route("apiv2/[controller]")]
    public class PeopleController : Controller
    {
        List<Person> personTable = new List<Person>();
        Person persona = new Person()
        {
            PhoneNumber = "1112222",
            Document = "4444444",
            IsActive = false,
            FirstName = "Daniel"
        };
        Person persona2 = new Person()
        {
            PhoneNumber = "1112222",
            Document = "4444445",
            IsActive = false,
            FirstName = "Moises"
        };

        private readonly DatabaseContext _context;

        public PeopleController(DatabaseContext context)
        {
            _context = context;
        }
        [HttpGet("[action]")]
        public IEnumerable<Person> BeneficiariesList()
        {
            personTable.Add(persona);
            personTable.Add(persona2);
            return personTable.AsEnumerable();
            //return View(await _context.Beneficiarios.ToListAsync());
        }

        // GET: People/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var person = await _context.Beneficiarios
                .SingleOrDefaultAsync(m => m.ID == id);
            if (person == null)
            {
                return NotFound();
            }

            return View(person);
        }

        // GET: People/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: People/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,PhoneNumber,FirstName,LastName,Document,Language,Genre,HasChildren,Nationality,HasInsurance,HasGovernmentSubsidy,IsActive,LeavingReason,Birthdate,Referred,CivilStatus,Province,Education,Profession,Job,Religion")] Person person)
        {
            if (ModelState.IsValid)
            {
                _context.Add(person);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(person);
        }

        // GET: People/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var person = await _context.Beneficiarios.SingleOrDefaultAsync(m => m.ID == id);
            if (person == null)
            {
                return NotFound();
            }
            return View(person);
        }

        // POST: People/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,PhoneNumber,FirstName,LastName,Document,Language,Genre,HasChildren,Nationality,HasInsurance,HasGovernmentSubsidy,IsActive,LeavingReason,Birthdate,Referred,CivilStatus,Province,Education,Profession,Job,Religion")] Person person)
        {
            if (id != person.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(person);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PersonExists(person.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index");
            }
            return View(person);
        }

        // GET: People/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var person = await _context.Beneficiarios
                .SingleOrDefaultAsync(m => m.ID == id);
            if (person == null)
            {
                return NotFound();
            }

            return View(person);
        }

        // POST: People/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var person = await _context.Beneficiarios.SingleOrDefaultAsync(m => m.ID == id);
            _context.Beneficiarios.Remove(person);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool PersonExists(int id)
        {
            return _context.Beneficiarios.Any(e => e.ID == id);
        }
    }
}
