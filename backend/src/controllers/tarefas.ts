import { Request, Response } from 'express';
import { connection } from '../database/connection';

class Tarefas {
    async create(req: Request, res: Response){
        const {nome, descricao, data} = req.body;
        const teste = Date.UTC(2021, 6, 20);
        const ret = await connection('Tarefas').insert({
            nome, 
            descricao,
            data: teste
        })
        console.log(ret)
        return res.send({
            "nome": nome, 
            "data": data, 
            "descricao": descricao,
            "response": ret
        });
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