import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDificulty1687866987431 implements MigrationInterface {
    name = 'AddDificulty1687866987431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "dificulty" character varying`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "status" SET DEFAULT 'Em progresso'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "dificulty"`);
    }

}
