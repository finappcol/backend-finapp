import { MigrationInterface, QueryRunner } from "typeorm";

export class agreement1679698892699 implements MigrationInterface {
    name = 'agreement1679698892699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agreement" ("id" SERIAL NOT NULL, "agreement" character varying NOT NULL, "active" boolean NOT NULL, "pensioner" boolean NOT NULL, CONSTRAINT "PK_e7537188219eeef56233a609753" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rates" DROP COLUMN "factor"`);
        await queryRunner.query(`ALTER TABLE "rates" ADD "factor" numeric(5,4) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "rates" DROP COLUMN "extraPrima"`);
        await queryRunner.query(`ALTER TABLE "rates" ADD "extraPrima" numeric(5,1) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "rates" DROP COLUMN "income"`);
        await queryRunner.query(`ALTER TABLE "rates" ADD "income" numeric(5,1) NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rates" DROP COLUMN "income"`);
        await queryRunner.query(`ALTER TABLE "rates" ADD "income" real NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "rates" DROP COLUMN "extraPrima"`);
        await queryRunner.query(`ALTER TABLE "rates" ADD "extraPrima" double precision NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "rates" DROP COLUMN "factor"`);
        await queryRunner.query(`ALTER TABLE "rates" ADD "factor" real NOT NULL DEFAULT '0'`);
        await queryRunner.query(`DROP TABLE "agreement"`);
    }

}
