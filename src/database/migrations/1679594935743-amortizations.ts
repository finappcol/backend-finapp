import { MigrationInterface, QueryRunner } from "typeorm";

export class amortizations1679594935743 implements MigrationInterface {
    name = 'amortizations1679594935743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "financialEntity" ("financialEntityId" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_ea443c4186ffdfcc52ea909f23e" PRIMARY KEY ("financialEntityId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "financialEntity"`);
    }

}
