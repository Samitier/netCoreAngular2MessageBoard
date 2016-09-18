using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using netCoreApiExperiment.Models;

namespace netCoreApiExperiment.Config 
{
    public class AppDbContext : DbContext {
        private IConfigurationRoot _config;
        public AppDbContext (IConfigurationRoot config, DbContextOptions options) : base()
        {
            _config = config;
        }
        public DbSet<Message> Messages { get; set; }   

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(_config["ConnnexionStrings:AppContextConnection"]);
        }
    } 
}
 