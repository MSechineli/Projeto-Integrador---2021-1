import { Request, Response } from 'express';
import { connection } from '../database/connection';

class Tarefas {
  async create(request: Request, response: Response) {
    const { nome, descricao, data } = request.body;
    await connection('Tarefas').insert({
      nome,
      descricao,
      data
    }).then((dados) => {
      console.log(dados);
      return response.json(dados);
    })
    .catch((err) => {
      console.log(err);
      return response.json(err);
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
    const { id, nome, descricao, data } = request.body
    await connection('Tarefas')
      .where({ id }).update({ nome, descricao, data })
      .then((dados) => {
        console.log(dados);
        return response.json(dados);
      })
      .catch((err) => {
        console.log(err);
        return response.json(err);
      });
  }
  async delete(request: Request, response: Response) {
    const { idTarefa } = request.params
    await connection('Tarefas')
      .where({ id: idTarefa }).delete()
      .then((dados) => {
        console.log(dados);
        return response.json(dados);
      })
      .catch((err) => {
        console.log(err);
        return response.json(err);
      });
  }
}


export { Tarefas };
