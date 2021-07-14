import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("Tarefas").del();

    // Inserts seed entries
    await knex("Tarefas").insert([
        { 
            nome: "Tarefas",
            descricao: "Fazer funcionar",
            data: "11/07/2017"
        },
    ]);
};
