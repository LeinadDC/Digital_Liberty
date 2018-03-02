using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class Entry
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public DateTime EntryDate { get; set; }
        public virtual ICollection<PersonEntry> PersonEntry { get; set; }
    }
}
