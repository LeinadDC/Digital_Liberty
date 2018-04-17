using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Digital_Liberty.Migrations
{
    public partial class Locations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Location",
                table: "Beneficiarios");

            migrationBuilder.AddColumn<int>(
                name: "LocationID",
                table: "Beneficiarios",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Lugares",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lugares", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lugares");

            migrationBuilder.DropColumn(
                name: "LocationID",
                table: "Beneficiarios");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Beneficiarios",
                nullable: true);
        }
    }
}
