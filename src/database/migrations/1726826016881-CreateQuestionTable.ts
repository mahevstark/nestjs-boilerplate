import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateQuestionTable1726826016881 implements MigrationInterface {
    name = 'CreateQuestionTable1726826016881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "question" ("id" SERIAL NOT NULL, "title" character varying, "question" character varying, "answerType" character varying, "answers" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "statusId" integer, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_83ba3cab2514695c0cdf6b835f" ON "question" ("title") `);
        await queryRunner.query(`CREATE INDEX "IDX_7dd1a945ab428f2a3392c2d453" ON "question" ("question") `);
        await queryRunner.query(`CREATE INDEX "IDX_c9f486618a63052ab817328707" ON "question" ("answerType") `);
        await queryRunner.query(`CREATE INDEX "IDX_eb866a96370419245753379002" ON "question" ("answers") `);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_338e29131ba4f3868276052c178" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_338e29131ba4f3868276052c178"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eb866a96370419245753379002"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9f486618a63052ab817328707"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7dd1a945ab428f2a3392c2d453"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_83ba3cab2514695c0cdf6b835f"`);
        await queryRunner.query(`DROP TABLE "question"`);
    }

}
