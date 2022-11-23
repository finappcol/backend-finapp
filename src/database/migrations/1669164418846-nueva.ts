import { MigrationInterface, QueryRunner } from "typeorm";

export class nueva1669164418846 implements MigrationInterface {
    name = 'nueva1669164418846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "jobId" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "jobId" SET NOT NULL`);
    }

}
