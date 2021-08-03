import { Request, Response } from 'express';
import { connection } from '../database/connection';

class Tarefas {
  async create(request: Request, response: Response) {
    const { nome, descricao, dataDefinida } = request.body;

    if(nome == "" || nome == undefined) response.status(400);
    if(descricao == "" || descricao == undefined) response.status(400);
    if(dataDefinida == "" || dataDefinida == undefined) response.status(400);

    await connection('Tarefas').insert({
      nome,
      descricao,
      dataDefinida,
      status: false,
    }).then((dados) => {
      console.log(dados);
      return response.status(200).json(dados);
    })
    .catch((err) => {
      console.log(err);
      return response.status(400).json(err);
    });
  }
  async read(request: Request, response: Response) {
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
  async update(request: Request, response: Response) {
    const { id, nome, descricao, dataDefinida } = request.body

    if(nome == "" || nome == undefined) response.status(400);
    if(descricao == "" || descricao == undefined) response.status(400);
    if(dataDefinida == "" || dataDefinida == undefined) response.status(400);
    if(status == "" || status == undefined) response.status(400);
    if(id == "" || id == undefined) response.status(400);


    await connection('Tarefas')
      .where({ id }).update({ nome, descricao, dataDefinida, status })
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
    if(idTarefa == "" || idTarefa == undefined) response.status(400);
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
