import { Router } from "express";
import { documentacao, nome, helloWord } from "./controllers.js";

const routes = Router();

routes.get("/", documentacao);
routes.get("/nome/:name", nome);
routes.get("/hello", helloWord)

export default routes;