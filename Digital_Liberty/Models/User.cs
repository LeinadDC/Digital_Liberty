using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Digital_Liberty.Models
{
    public class User
    {
        public int ID { get; set; }
        public string NombreUsuario { get; set; }
        public string Password { get; set; }
        public string Tienda { get; set; }
    }
}
