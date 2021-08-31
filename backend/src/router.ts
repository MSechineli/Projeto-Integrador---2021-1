import { Request, Response, Router } from "express";
import { Tarefas } from "./controllers/tarefas";
const routes = Router();
const tarefa = new Tarefas();

routes.post("/tarefas", tarefa.create);
routes.get("/tarefas", tarefa.get);
routes.get("/tarefas/:idProjeto", tarefa.getByIdProjeto);
routes.delete("/tarefas/:idTarefa", tarefa.delete);
routes.put("/tarefas", tarefa.update);


export default routes;