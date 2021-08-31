import { Request, Response, Router } from "express";
import { Projetos } from "./controllers/projetos";
import { Tarefas } from "./controllers/tarefas";
const routes = Router();
const tarefa = new Tarefas();
const projeto = new Projetos();

routes.post("/tarefas", tarefa.create);
routes.get("/tarefas", tarefa.get);
routes.get("/tarefas/:idProjeto", tarefa.getByIdProjeto);
routes.delete("/tarefas/:idTarefa", tarefa.delete);
routes.put("/tarefas", tarefa.update);

routes.post("/projetos", projeto.create);
routes.get("/projetos", projeto.read);
routes.delete("/projetos/:idProjeto", projeto.delete);
routes.put("/projetos", projeto.update);


export default routes;