import { Router } from "express";
import {
  createBattle,
  getAllBattle,
  updateBattle,
  deleteBattle,
  getBattleById,
} from "../controllers/battle.controllers.js";

export const battleRoutes = Router();

battleRoutes.post("/battles/", createBattle);
battleRoutes.get("/battles/", getAllBattle);
battleRoutes.get("/battles/:id", getBattleById);
battleRoutes.put("/battles/:id", updateBattle);
battleRoutes.delete("/battles/:id", deleteBattle);

export default battleRoutes;