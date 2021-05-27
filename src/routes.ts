import { Router } from "express";   
import { CursoController } from "./controllers/CursoController";

const router = Router();

const cursoController = new CursoController()

router.post('/curso', cursoController.create)

export { router };