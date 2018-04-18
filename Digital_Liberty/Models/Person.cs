using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class Person
    {
        /**
         * Propiedades básicas y necesarias de cada persona.**/
        public int ID { get; set; }
        public string PhoneNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Document { get; set; }
        public string Language { get; set; }
        public string Genre { get; set; }
        public string HasChildren { get; set; }
        public string Nationality { get; set; }
        public string HasInsurance { get; set; }
        public string HasGovernmentSubsidy {get;set;}
        public string IsActive { get; set; }
        public string LeavingReason { get; set; }
        public Location Location { get; set; }
        public int LocationID { get; set; }

        /**
         * Esto permite tener varias fechas de ingreso y suspension.**/
        public virtual ICollection<Entry> Entries { get; set; }
        public virtual ICollection<Suspension> Suspensions { get; set; }
        public virtual ICollection<Issue> Issues { get; set; }

        /**
         * Calcular la edad como numero utilizando un
         * procedimiento almacenado basandose en la fecha de nacimiento **/
        public DateTime Birthdate { get; set; }
        
        /**
         * Propiedades relacionales necesarias.**/
        public string Referred { get; set; }
        public string CivilStatus { get; set; }
        public string Province { get; set; }
        public string Education { get; set; }
        public string Profession { get; set; }
        public string Job { get; set; }
        public string Religion { get; set; }
    }
}
