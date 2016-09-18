using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using netCoreApiExperiment.Config;

namespace server.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20160918221923_InitialDatabase")]
    partial class InitialDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("netCoreApiExperiment.Models.Message", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("body");

                    b.Property<int>("rotation");

                    b.Property<string>("title");

                    b.Property<int>("x");

                    b.Property<int>("y");

                    b.HasKey("id");

                    b.ToTable("Messages");
                });
        }
    }
}
