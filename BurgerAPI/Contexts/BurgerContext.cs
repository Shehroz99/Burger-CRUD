namespace BurgerAPI.Contexts;

using BurgerAPI.Models;
using Microsoft.EntityFrameworkCore;

    public class BurgerContext : DbContext
    {
        public BurgerContext(DbContextOptions<BurgerContext> options) : base(options){}

        public DbSet<Burger> Burgers { get; set; }
    }
