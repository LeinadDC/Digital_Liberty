﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {

        }
        public DbSet<Person> Beneficiarios { get; set; }
        public DbSet<PersonEntry> BeneficiariosIngresos { get; set; }
        public DbSet<Entry> Ingresos { get; set; }
        public DbSet<PersonSuspension> BeneficiariosSuspensiones { get; set; }
        public DbSet<Suspension> Suspensiones { get; set; }
        public DbSet<PersonIssue> BeneficiariosProblemas { get; set; }
        public DbSet<Issue> Problemas { get; set; }
        public DbSet<User> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-2BILSPB;Initial Catalog=CasaLibertad;Integrated Security=False;User ID=casa;Password=casa123;Connect Timeout=30;");
        }
    }
}