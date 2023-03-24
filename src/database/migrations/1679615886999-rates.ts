import { MigrationInterface, QueryRunner } from "typeorm";

export class rates1679615886999 implements MigrationInterface {
    name = 'rates1679615886999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rates" ("id" SERIAL NOT NULL, "agreementId" integer NOT NULL, "rate" numeric(5,2) NOT NULL DEFAULT '0', "ageStart" integer NOT NULL, "ageEnd" integer NOT NULL, "term" integer NOT NULL, "factor" numeric(5,4) NOT NULL DEFAULT '0', "extraPrima" numeric(5,1) NOT NULL DEFAULT '0', "income" numeric(5,1) NOT NULL DEFAULT '0', "financialEntityId" integer NOT NULL, "thirdEntityId" integer NOT NULL, "mode" character varying NOT NULL, CONSTRAINT "PK_2c804ed4019b80ce48eedba5cec" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rates"`);
    }

}
