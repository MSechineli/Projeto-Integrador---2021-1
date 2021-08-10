import { Request, Response } from 'express';
import { connection } from '../database/connection';


class Projetos {
    async create(request: Request, response: Response) {
      const { nome } = request.body;
  
      if(nome == "" || nome == undefined) response.status(400);

      await connection('Projetos').insert({
        nome
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
      await connection('Projetos')
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
      const { id, nome } = request.body
  
      if(nome == "" || nome == undefined) response.status(400);

      await connection('Projetos')
        .where({ id }).update({ nome })
        .then((dados) => {
          if(dados){
            console.log(dados);
            return response.json(dados);
          }
          throw "Projeto não encontrado";
        })
        .catch((err) => {
          console.log(err);
          return response.json(err);
        });
    }
    async delete(request: Request, response: Response) {
      const { idProjeto } = request.params
      if(idProjeto == "" || idProjeto == undefined) response.status(400);
      await connection('Projetos')
        .where({ id: idProjeto }).delete()
        .then((dados) => {
          if(dados){
            console.log(dados);
            return response.json(dados);
          }
          throw "Projeto não encontrado"
        })
        .catch((err) => {
          console.log(err);
          return response.json(err);
        });
    }
  }
  
  
  export { Projetos };
  