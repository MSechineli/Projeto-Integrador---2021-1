import { Request, Response } from 'express';
import { connection } from '../database/connection';

class Tarefas {
  async create(request: Request, response: Response) {
    const { nome, descricao, data, id_projeto } = request.body;

    if(nome == "" || nome == undefined) response.status(400);
    if(descricao == "" || descricao == undefined) response.status(400);
    if(data == "" || data == undefined) response.status(400);
    if(id_projeto == "" || id_projeto == undefined) response.status(400);

    await connection('Tarefas').insert({
      nome,
      descricao,
      dataDefinida: null,
      status: false,
      id_projeto
    }).then((dados) => {
      console.log(dados);
      return response.status(200).json(dados);
    })
    .catch((err) => {
      console.log(err);
      return response.status(400).json(err);
    });
  }
  async get(request: Request, response: Response) {
    await connection('Tarefas')
    .then((dados) => {
      console.log(dados);
      return response.json(dados);
    })
    .catch((err) => {
      console.log(err);
      return response.json(err);
    });
  }
  async getByIdProjeto(request: Request, response: Response) {
    const { idProjeto } = request.params
    await connection('Tarefas').where({ idProjeto })
    .then((dados) => {
      console.log(dados);
      return response.json(dados);
    })
    .catch((err) => {
      console.log(err);
      return response.json(err);
    });
  }
  async update(request: Request, response: Response) {
    const { id, nome, descricao, dataDefinida, status, id_projeto } = request.body

    console.log("UPDATE:", id, nome, descricao, dataDefinida, status);

    if(id == "" || id == undefined) return response.status(400).json();
    if(nome == "") return response.status(400).json();
    if(id_projeto == "" || id_projeto == undefined) return response.status(400);

    await connection('Tarefas')
      .where({ id }).update({ nome, descricao, dataDefinida, status, id_projeto })
      .then((dados) => {
        if(dados){
          console.log(dados);
          return response.json(dados);
        }
        throw "Tarefa não encontrada";
      })
      .catch((err) => {
        console.log(err);
        return response.json(err);
      });
  }
  async delete(request: Request, response: Response) {
    const { idTarefa } = request.params
    if(idTarefa == "" || idTarefa == undefined) return response.status(400);
    await connection('Tarefas')
      .where({ id: idTarefa }).delete()
      .then((dados) => {
        if(dados){
          console.log(dados);
          return response.json(dados);
        }
        throw "Tarefa não encontrada"
      })
      .catch((err) => {
        console.log(err);
        return response.json(err);
      });
  }
}


export { Tarefas };
