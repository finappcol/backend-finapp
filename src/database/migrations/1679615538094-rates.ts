import { MigrationInterface, QueryRunner } from "typeorm";

export class rates1679615538094 implements MigrationInterface {
    name = 'rates1679615538094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rates" ("agreementId" SERIAL NOT NULL, "rate" numeric(5,2) NOT NULL DEFAULT '0', "ageStart" integer NOT NULL, "ageEnd" integer NOT NULL, "term" integer NOT NULL, "factor" numeric(5,4) NOT NULL DEFAULT '0', "extraPrima" numeric(5,1) NOT NULL DEFAULT '0', "income" numeric(5,1) NOT NULL DEFAULT '0', "financialEntityId" integer NOT NULL, "thirdEntityId" integer NOT NULL, "mode" character varying NOT NULL, CONSTRAINT "PK_5f0e74bb658abd7085639df5a03" PRIMARY KEY ("agreementId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rates"`);
    }

}
