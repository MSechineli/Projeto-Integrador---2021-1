import { Request, Response, Router } from "express";
import { Tarefas } from "./controllers/tarefas";
const routes = Router();
const tarefa = new Tarefas();

routes.post("/tarefas", tarefa.create);
routes.get("/tarefas", tarefa.read);
routes.get("/tarefas/nowdate", tarefa.readNowDate);
routes.delete("/tarefas", tarefa.delete);
routes.put("/tarefas", tarefa.update);


export default routes;