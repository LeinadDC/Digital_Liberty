using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Digital_Liberty.Migrations
{
    public partial class LocationDel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LocationID",
                table: "Beneficiarios");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LocationID",
                table: "Beneficiarios",
                nullable: false,
                defaultValue: 0);
        }
    }
}
