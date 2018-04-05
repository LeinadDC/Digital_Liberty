using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Digital_Liberty.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Beneficiarios",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Birthdate = table.Column<DateTime>(nullable: false),
                    CivilStatus = table.Column<string>(nullable: true),
                    Document = table.Column<string>(nullable: true),
                    Education = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    Genre = table.Column<string>(nullable: true),
                    HasChildren = table.Column<bool>(nullable: false),
                    HasGovernmentSubsidy = table.Column<bool>(nullable: false),
                    HasInsurance = table.Column<bool>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    Job = table.Column<string>(nullable: true),
                    Language = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    LeavingReason = table.Column<string>(nullable: true),
                    Nationality = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Profession = table.Column<string>(nullable: true),
                    Province = table.Column<string>(nullable: true),
                    Referred = table.Column<string>(nullable: true),
                    Religion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Beneficiarios", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Problemas",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    IssueType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Problemas", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NombreUsuario = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Tienda = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Ingresos",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EntryDate = table.Column<DateTime>(nullable: false),
                    PersonID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingresos", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Ingresos_Beneficiarios_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Beneficiarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Suspensiones",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    PersonID = table.Column<int>(nullable: true),
                    SuspensionDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suspensiones", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Suspensiones_Beneficiarios_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Beneficiarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BeneficiariosProblemas",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IssueID = table.Column<int>(nullable: false),
                    PersonID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeneficiariosProblemas", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BeneficiariosProblemas_Problemas_IssueID",
                        column: x => x.IssueID,
                        principalTable: "Problemas",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BeneficiariosProblemas_Beneficiarios_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Beneficiarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BeneficiariosIngresos",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EntryID = table.Column<int>(nullable: false),
                    PersonID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeneficiariosIngresos", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BeneficiariosIngresos_Ingresos_EntryID",
                        column: x => x.EntryID,
                        principalTable: "Ingresos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BeneficiariosIngresos_Beneficiarios_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Beneficiarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BeneficiariosSuspensiones",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PersonID = table.Column<int>(nullable: false),
                    SuspensionID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeneficiariosSuspensiones", x => x.ID);
                    table.ForeignKey(
                        name: "FK_BeneficiariosSuspensiones_Beneficiarios_PersonID",
                        column: x => x.PersonID,
                        principalTable: "Beneficiarios",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BeneficiariosSuspensiones_Suspensiones_SuspensionID",
                        column: x => x.SuspensionID,
                        principalTable: "Suspensiones",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiariosIngresos_EntryID",
                table: "BeneficiariosIngresos",
                column: "EntryID");

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiariosIngresos_PersonID",
                table: "BeneficiariosIngresos",
                column: "PersonID");

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiariosProblemas_IssueID",
                table: "BeneficiariosProblemas",
                column: "IssueID");

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiariosProblemas_PersonID",
                table: "BeneficiariosProblemas",
                column: "PersonID");

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiariosSuspensiones_PersonID",
                table: "BeneficiariosSuspensiones",
                column: "PersonID");

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiariosSuspensiones_SuspensionID",
                table: "BeneficiariosSuspensiones",
                column: "SuspensionID");

            migrationBuilder.CreateIndex(
                name: "IX_Ingresos_PersonID",
                table: "Ingresos",
                column: "PersonID");

            migrationBuilder.CreateIndex(
                name: "IX_Suspensiones_PersonID",
                table: "Suspensiones",
                column: "PersonID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BeneficiariosIngresos");

            migrationBuilder.DropTable(
                name: "BeneficiariosProblemas");

            migrationBuilder.DropTable(
                name: "BeneficiariosSuspensiones");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Ingresos");

            migrationBuilder.DropTable(
                name: "Problemas");

            migrationBuilder.DropTable(
                name: "Suspensiones");

            migrationBuilder.DropTable(
                name: "Beneficiarios");
        }
    }
}
