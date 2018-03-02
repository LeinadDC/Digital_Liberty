using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class Suspension
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public DateTime SuspensionDate { get; set; }
        public virtual ICollection<PersonSuspension> PersonSuspension { get; set; }
    }
}
