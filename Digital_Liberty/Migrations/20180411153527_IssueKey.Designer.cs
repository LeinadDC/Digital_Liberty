﻿// <auto-generated />
using Digital_Liberty.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Digital_Liberty.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20180411153527_IssueKey")]
    partial class IssueKey
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Digital_Liberty.Models.Entry", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("EntryDate");

                    b.Property<int>("PersonID");

                    b.HasKey("ID");

                    b.HasIndex("PersonID");

                    b.ToTable("Ingresos");
                });

            modelBuilder.Entity("Digital_Liberty.Models.Issue", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("IssueType");

                    b.Property<string>("PersonID");

                    b.Property<int?>("PersonID1");

                    b.HasKey("ID");

                    b.HasIndex("PersonID1");

                    b.ToTable("Problemas");
                });

            modelBuilder.Entity("Digital_Liberty.Models.Person", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Birthdate");

                    b.Property<string>("CivilStatus");

                    b.Property<string>("Document");

                    b.Property<string>("Education");

                    b.Property<string>("FirstName");

                    b.Property<string>("Genre");

                    b.Property<string>("HasChildren");

                    b.Property<bool>("HasGovernmentSubsidy");

                    b.Property<bool>("HasInsurance");

                    b.Property<string>("IsActive");

                    b.Property<string>("Job");

                    b.Property<string>("Language");

                    b.Property<string>("LastName");

                    b.Property<string>("LeavingReason");

                    b.Property<string>("Nationality");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("Profession");

                    b.Property<string>("Province");

                    b.Property<string>("Referred");

                    b.Property<string>("Religion");

                    b.HasKey("ID");

                    b.ToTable("Beneficiarios");
                });

            modelBuilder.Entity("Digital_Liberty.Models.Suspension", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<int>("PersonID");

                    b.Property<DateTime>("SuspensionDate");

                    b.HasKey("ID");

                    b.HasIndex("PersonID");

                    b.ToTable("Suspensiones");
                });

            modelBuilder.Entity("Digital_Liberty.Models.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("NombreUsuario");

                    b.Property<string>("Password");

                    b.Property<string>("Tienda");

                    b.HasKey("ID");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("Digital_Liberty.Models.Entry", b =>
                {
                    b.HasOne("Digital_Liberty.Models.Person", "Personas")
                        .WithMany("Entries")
                        .HasForeignKey("PersonID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Digital_Liberty.Models.Issue", b =>
                {
                    b.HasOne("Digital_Liberty.Models.Person")
                        .WithMany("Issues")
                        .HasForeignKey("PersonID1");
                });

            modelBuilder.Entity("Digital_Liberty.Models.Suspension", b =>
                {
                    b.HasOne("Digital_Liberty.Models.Person", "Personas")
                        .WithMany("Suspensions")
                        .HasForeignKey("PersonID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}