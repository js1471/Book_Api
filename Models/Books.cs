﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Book_Api.Models
{
    public class Books
    {

        [Key]
        public int Id { get; set; }
     
        public string Title { get; set; }

        public string Discription { get; set; }
     
        public int Price { get; set; }
        public string Author { get; set; }


    }
}
