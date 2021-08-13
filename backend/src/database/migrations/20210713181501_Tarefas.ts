import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Tarefas', (table) => {
        table.increments('id').primary();
        table.string("nome").notNullable();
        table.string("descricao");
        table.date("data").notNullable();
        table.foreign('id_in_projetos').references('Projetos.Tarefas_id_in_projetos');
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Tarefas');
}

