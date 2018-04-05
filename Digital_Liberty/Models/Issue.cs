using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class Issue
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public string IssueType { get; set; }
        public virtual ICollection<PersonIssue> PersonIssues { get; set; }

    }
}
