using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Digital_Liberty.Migrations
{
    public partial class IssueKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BeneficiariosIngresos");

            migrationBuilder.DropTable(
                name: "BeneficiariosProblemas");

            migrationBuilder.DropTable(
                name: "BeneficiariosSuspensiones");

            migrationBuilder.AddColumn<int>(
                name: "PersonID1",
                table: "Problemas",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Problemas_PersonID1",
                table: "Problemas",
                column: "PersonID1");

            migrationBuilder.AddForeignKey(
                name: "FK_Problemas_Beneficiarios_PersonID1",
                table: "Problemas",
                column: "PersonID1",
                principalTable: "Beneficiarios",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Problemas_Beneficiarios_PersonID1",
                table: "Problemas");

            migrationBuilder.DropIndex(
                name: "IX_Problemas_PersonID1",
                table: "Problemas");

            migrationBuilder.DropColumn(
                name: "PersonID1",
                table: "Problemas");

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
        }
    }
}
