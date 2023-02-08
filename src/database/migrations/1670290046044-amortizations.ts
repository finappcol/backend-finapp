import { MigrationInterface, QueryRunner } from "typeorm";

export class amortizations1670290046044 implements MigrationInterface {
    name = 'amortizations1670290046044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "amortizations" ("amortId" SERIAL NOT NULL, "amount" numeric(5,2) NOT NULL DEFAULT '0', "months" integer NOT NULL, "eAInterest" numeric(5,2) NOT NULL DEFAULT '0', "dateBegin" date NOT NULL, "results" text, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_fa4a5cdc17221492fca45a2acae" PRIMARY KEY ("amortId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "amortizations"`);
    }

}
