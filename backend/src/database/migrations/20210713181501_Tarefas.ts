import { Knex } from "knex";
import { Projetos } from "../../controllers/projetos";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Tarefas', (table) => {
        table.increments('id').primary();
        table.string("nome").notNullable();
        table.string("descricao");
        table.date("data").notNullable();
        table.integer("id_projeto").unsigned();
        table.foreign("id_projeto").references("id").inTable("Projetos");
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Tarefas');
}

