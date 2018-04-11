using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Digital_Liberty.Migrations
{
    public partial class SuspensionID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Suspensiones_Beneficiarios_PersonID",
                table: "Suspensiones");

            migrationBuilder.AlterColumn<int>(
                name: "PersonID",
                table: "Suspensiones",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Suspensiones_Beneficiarios_PersonID",
                table: "Suspensiones",
                column: "PersonID",
                principalTable: "Beneficiarios",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Suspensiones_Beneficiarios_PersonID",
                table: "Suspensiones");

            migrationBuilder.AlterColumn<int>(
                name: "PersonID",
                table: "Suspensiones",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Suspensiones_Beneficiarios_PersonID",
                table: "Suspensiones",
                column: "PersonID",
                principalTable: "Beneficiarios",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
