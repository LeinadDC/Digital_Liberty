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
        public Genre Genre { get; set; }
        public bool HasChildren { get; set; }
        public string Nationality { get; set; }
        public bool HasInsurance { get; set; }
        public bool HasGovernmentSubsidy {get;set;}
        public bool IsActive { get; set; }
        public string LeavingReason { get; set; }

        /**
         * Esto permite tener varias fechas de ingreso y suspension.**/
        public virtual ICollection<Entry> Entries { get; set; }
        public virtual ICollection<Suspension> Suspensions { get; set; }

        /**
         * Calcular la edad como numero utilizando un
         * procedimiento almacenado basandose en la fecha de nacimiento **/
        public DateTime Birthdate { get; set; }
        
        /**
         * Propiedades relacionales necesarias.**/
        public Referred Referred { get; set; }
        public CivilStatus CivilStatus { get; set; }
        public Province Province { get; set; }
        public Education Education { get; set; }
        public Profession Profession { get; set; }
        public Job Job { get; set; }
        public Religion Religion { get; set; }
        public virtual ICollection<PersonIssue> PersonIssues { get; set; }
    }
}
