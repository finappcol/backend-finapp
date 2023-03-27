import { MigrationInterface, QueryRunner } from "typeorm";

export class modes1679941252686 implements MigrationInterface {
    name = 'modes1679941252686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mode" ("id" SERIAL NOT NULL, "mode" character varying NOT NULL, CONSTRAINT "PK_ca852cfca8f2fe91ee9daa47ec6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mode"`);
    }

}
