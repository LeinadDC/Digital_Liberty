using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }
        public DbSet<Person> Beneficiarios { get; set; }
        public DbSet<Entry> Ingresos { get; set; }
        public DbSet<Suspension> Suspensiones { get; set; }
        public DbSet<Issue> Problemas { get; set; }
        public DbSet<User> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=ORLANDO\\SQLEXPRESS;Initial Catalog=CasaLibertad;Integrated Security=False;User ID=casa1;Password=casa123;Connect Timeout=30;");
        }
    }
}
