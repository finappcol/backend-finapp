import { MigrationInterface, QueryRunner } from "typeorm";

export class modes1679941609670 implements MigrationInterface {
    name = 'modes1679941609670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "modes" ("id" SERIAL NOT NULL, "mode" character varying NOT NULL, CONSTRAINT "PK_446efd5bcafbf52cb81f51d425a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "mode" ADD "active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "mode" ADD "pensioner" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mode" DROP COLUMN "pensioner"`);
        await queryRunner.query(`ALTER TABLE "mode" DROP COLUMN "active"`);
        await queryRunner.query(`DROP TABLE "modes"`);
    }

}
