import { MigrationInterface, QueryRunner } from "typeorm";

export class nueva1669161710708 implements MigrationInterface {
    name = 'nueva1669161710708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "photo" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "photo"`);
    }

}
