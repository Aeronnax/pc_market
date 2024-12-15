import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductsTable1734250710346 implements MigrationInterface {
  name = 'CreateProductsTable1734250710346';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Products" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" numeric NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "Products" ADD CONSTRAINT "FK_85fdee89fa67fcdce66863def29" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Products" DROP CONSTRAINT "FK_85fdee89fa67fcdce66863def29"`,
    );
    await queryRunner.query(`DROP TABLE "Products"`);
    await queryRunner.query(`DROP TABLE "Categories"`);
  }
}
