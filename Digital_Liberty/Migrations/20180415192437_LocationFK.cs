using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Digital_Liberty.Migrations
{
    public partial class LocationFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LocationID",
                table: "Beneficiarios",
                nullable: true,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Beneficiarios_LocationID",
                table: "Beneficiarios",
                column: "LocationID");

            migrationBuilder.AddForeignKey(
                name: "FK_Beneficiarios_Lugares_LocationID",
                table: "Beneficiarios",
                column: "LocationID",
                principalTable: "Lugares",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Beneficiarios_Lugares_LocationID",
                table: "Beneficiarios");

            migrationBuilder.DropIndex(
                name: "IX_Beneficiarios_LocationID",
                table: "Beneficiarios");

            migrationBuilder.DropColumn(
                name: "LocationID",
                table: "Beneficiarios");
        }
    }
}
