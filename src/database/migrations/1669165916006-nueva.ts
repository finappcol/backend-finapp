import { MigrationInterface, QueryRunner } from "typeorm";

export class nueva1669165916006 implements MigrationInterface {
    name = 'nueva1669165916006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "identification" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "identification"`);
    }

}
