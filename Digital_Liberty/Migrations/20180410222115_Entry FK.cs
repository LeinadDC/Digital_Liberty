using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Digital_Liberty.Migrations
{
    public partial class EntryFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ingresos_Beneficiarios_PersonID",
                table: "Ingresos");

            migrationBuilder.AlterColumn<int>(
                name: "PersonID",
                table: "Ingresos",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Ingresos_Beneficiarios_PersonID",
                table: "Ingresos",
                column: "PersonID",
                principalTable: "Beneficiarios",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ingresos_Beneficiarios_PersonID",
                table: "Ingresos");

            migrationBuilder.AlterColumn<int>(
                name: "PersonID",
                table: "Ingresos",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Ingresos_Beneficiarios_PersonID",
                table: "Ingresos",
                column: "PersonID",
                principalTable: "Beneficiarios",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
