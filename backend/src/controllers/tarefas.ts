import { Request, Response } from 'express';
import { connection } from '../database/connection';

class Tarefas {
    async create(req: Request, res: Response){
        const {nome, descricao, data} = req.body;
        const ret = await connection('Tarefas').insert({
            nome, 
            descricao,
            data
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
        const { id, nome, descricao, data} = request.body
        const alterado = await connection('Tarefas').where({id}).update({nome, descricao, data})
        return response.json(alterado);
    }
    async delete(request: Request, response: Response){
        const { id } = request.body
        const removido = await connection('Tarefas').delete(id);
        return response.json(removido);
    }
}

export { Tarefas };