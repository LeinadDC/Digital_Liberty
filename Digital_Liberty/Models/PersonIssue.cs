using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class PersonIssue
    {
        public int ID { get; set; }
        public int PersonID { get; set; }
        public int IssueID { get; set; }
        public virtual Person Person { get; set; }
        public virtual Issue Issue { get; set; }

    }
}
