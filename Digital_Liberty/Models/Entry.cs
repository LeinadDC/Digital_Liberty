using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class Entry
    {
        public int ID { get; set; }
        public DateTime EntryDate { get; set; }
        public int PersonID { get; set; }
        public virtual Person Personas { get; set; }
    }
}
