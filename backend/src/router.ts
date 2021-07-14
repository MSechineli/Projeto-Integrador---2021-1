import { Request, Response, Router } from "express";
import { Tarefas } from "./controllers/tarefas";
const routes = Router();
const tarefa = new Tarefas();

routes.post("/tarefas", (request: Request, response: Response) => {
    response.json({"TESTE": "FOI"});
});
routes.get("/tarefas", tarefa.read);
routes.delete("/tarefas", tarefa.delete);
routes.put("/tarefas", tarefa.update);


export default routes;