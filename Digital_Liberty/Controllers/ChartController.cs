using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Digital_Liberty.Models;
using Microsoft.AspNetCore.Authorization;

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


        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetHasChildren()
        {
            var groupedHasChildren = _context.Beneficiarios.GroupBy(c => c.HasChildren)
                .Select(g => new
                {
                    name = g.Key,
                    count = g.Count(),
                }).
                OrderBy(c => c.name);
            return Json(groupedHasChildren);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetReferred()
        {
            var groupedRef = _context.Beneficiarios.GroupBy(c => c.Referred)
                .Select(g => new
                {
                    name = g.Key,
                    count = g.Count(),
                }).
                OrderBy(c => c.name);

            return Json(groupedRef);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetNationalityCount()
        {
            var grupedNationality = _context.Beneficiarios.GroupBy(c => c.Nationality)
                .Select(g => new
                {
                    name = g.Key,
                    count = g.Count(),
                }).
                OrderBy(c => c.name);

            return Json(grupedNationality);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetProvincesCount()
        {
            var groupedProvinces = _context.Beneficiarios.GroupBy(c => c.Province)
                .Select(g => new
                {
                    name = g.Key,
                    count = g.Count(),
                }).
                OrderBy(c => c.name);

            return Json(groupedProvinces);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetIssuesCount()
        {
            var groupedIssues = _context.Problemas.GroupBy(c => c.IssueType)
                .Select(g => new
                {
                    name = g.Key,
                    count = g.Count(),
                }).
                OrderBy(c => c.name);

            return Json(groupedIssues);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetWorkTypeCount()
        {
            var groupedStatus = _context.Beneficiarios.GroupBy(c => c.Job)
                .Select(g => new
                {
                    name = g.Key,
                    count = g.Count(),
                }).
                OrderBy(c => c.name);

            return Json(groupedStatus);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetAcademicGradeCount()
        {
            var groupedStatus = _context.Beneficiarios.GroupBy(c => c.Education)
                .Select(g => new
                {
                    name = g.Key,
                    count = g.Count(),
                }).
                OrderBy(c => c.name);

            return Json(groupedStatus);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetTotalPeople()
        {
            var count = _context.Beneficiarios.Count();

            return Json(count);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetActiveCount()
        {
            var count = _context.Beneficiarios.Count(x => x.IsActive == "Si");

            return Json(count);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetInactiveCount()
        {
            var count = _context.Beneficiarios.Count(x => x.IsActive == "No");

            return Json(count);
        }

        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetMaleCount()
        {
            var count = _context.Beneficiarios.Count(x => x.Genre == "Masculino");

            return Json(count);
        }
        // GET: api/People/Act
        [HttpGet("[action]")]
        public JsonResult GetFemaleCount()
        {
            var count = _context.Beneficiarios.Count(x => x.Genre == "Femenino");

            return Json(count);
        }
    }
}