using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Digital_Liberty.Models;

namespace Digital_Liberty.Controllers
{
    [Route("apiv2/[controller]")]
    public class PersonController : Controller
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


        // GET: Person
        public ActionResult Index()
        {
            return View();
        }

        // GET: Person/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Person/Create
        public ActionResult Create()
        {
            return View();
        }

        [HttpGet("[action]")]
        public IEnumerable<Person> BeneficiariesList()
        {
            personTable.Add(persona);
            personTable.Add(persona2);
            personTable.AsEnumerable();
            return personTable;
        }

        // POST: Person/Create
        [HttpPost]
       // [ValidateAntiForgeryToken]
        public ActionResult Create([FromBody] Person person)
        {
            try
            {
                personTable.Add(person);
                
                Console.Write(person);
               

                return Json(person);
            }
            catch
            {
                return Json("Fallo");
            }
        }

        // GET: Person/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Person/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, ICollection<Person> Person)
        {
            try
            {
                // TODO: Update Logic

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Person/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Person/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, ICollection<Person> Person)
        {
            try
            {
                // TODO: Delete Logic

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}