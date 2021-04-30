using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Book_Api.Models;

namespace Book_Api.Data
{
    public class Book_ApiContext : DbContext
    {
        public Book_ApiContext (DbContextOptions<Book_ApiContext> options)
            : base(options)
        {
        }

        public DbSet<Book_Api.Models.Books> Books { get; set; }
    }
}
