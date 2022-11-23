import { MigrationInterface, QueryRunner } from 'typeorm';

export class nueva1669161523391 implements MigrationInterface {
  name = 'nueva1669161523391';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "jobUser" ("jobId" SERIAL NOT NULL, "activity" character varying NOT NULL, "description" character varying NOT NULL, "companyId" integer NOT NULL, "dateBegin" date NOT NULL, "agreementType" character varying NOT NULL, "income" double precision NOT NULL, "expenses" double precision NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_2dd7ea76e66abcb6f450b98cffb" PRIMARY KEY ("jobId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("userId" SERIAL NOT NULL, "typeId" integer NOT NULL, "firstName" character varying NOT NULL, "secondName" character varying NOT NULL, "lastName" character varying NOT NULL, "lastName2" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "cellPhone" character varying NOT NULL, "address" character varying NOT NULL, "jobId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "jobUserJobId" integer, CONSTRAINT "REL_f4471d869d179ef562bf4e65ef" UNIQUE ("jobUserJobId"), CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_f4471d869d179ef562bf4e65ef7" FOREIGN KEY ("jobUserJobId") REFERENCES "jobUser"("jobId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_f4471d869d179ef562bf4e65ef7"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "jobUser"`);
  }
}
