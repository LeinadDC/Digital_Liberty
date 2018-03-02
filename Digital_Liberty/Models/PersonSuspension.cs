using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class PersonSuspension
    {
        public int ID { get; set; }
        public int PersonID { get; set; }
        public int SuspensionID { get; set; }
        public virtual Person Person { get; set; }
        public virtual Suspension Suspension { get; set; }

    }
}
