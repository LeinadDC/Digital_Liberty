using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class PersonEntry
    {
        public int ID { get; set; }
        public int PersonID { get; set; }
        public int EntryID { get; set; }
        public virtual Person Person { get; set; }
        public virtual Entry Entry { get; set; }

    }
}
