import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Projetos', (table) => {
        table.increments('id').primary();
        table.string("nome").notNullable();

    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Projetos');
}

