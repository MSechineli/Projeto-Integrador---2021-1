import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Tarefas', (table) => {
        table.increments('id').primary();
        table.string("nome").notNullable();
        table.string("descricao");
        table.string("data").notNullable();
        // table.time("hora");
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Tarefas');
}

