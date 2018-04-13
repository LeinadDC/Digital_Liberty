using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Digital_Liberty.Migrations
{
    public partial class Test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<int>(
                name: "PersonID",
                table: "Problemas",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Problemas_PersonID",
                table: "Problemas",
                column: "PersonID");

            migrationBuilder.AddForeignKey(
                name: "FK_Problemas_Beneficiarios_PersonID",
                table: "Problemas",
                column: "PersonID",
                principalTable: "Beneficiarios",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Problemas_Beneficiarios_PersonID",
                table: "Problemas");

            migrationBuilder.DropIndex(
                name: "IX_Problemas_PersonID",
                table: "Problemas");

            migrationBuilder.AlterColumn<string>(
                name: "PersonID",
                table: "Problemas",
                nullable: true,
                oldClrType: typeof(int));

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
    }
}
