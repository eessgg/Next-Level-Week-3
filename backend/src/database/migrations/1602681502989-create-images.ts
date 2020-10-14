import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602681502989 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
