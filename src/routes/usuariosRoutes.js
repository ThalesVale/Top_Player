import {Router} from "express";
import * as usuariosController from "../controllers/usuariosController.js";


const router = Router();

router.post("/login",usuariosController.login);
router.get("/", usuariosController.listar);
router.get("/:id", usuariosController.buscarPorId);
router.post("/", usuariosController.criar);
export default router;