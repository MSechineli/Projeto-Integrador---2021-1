import { Request, Response } from 'express';
import { connection } from '../database/connection';

class Tarefas {
    async create(req: Request, res: Response){
        // const {nome, descricao, data} = req.body;
        // console.log(nome, descricao, data);
        // const ret = connection('Tarefas').insert({
        //     nome, 
        //     descricao,
        //     data
        // })
        return res.send({"TESTE": "FOI"})
    }
    async read(request: Request, response: Response){
        const dados = await connection('Tarefas');
        console.log(dados);
        return response.send(dados);
    }
    async update(request: Request, response: Response){
        return response.json("NADA");;
    }
    async delete(request: Request, response: Response){
        return response.json("NADA");
    }
}

export { Tarefas };