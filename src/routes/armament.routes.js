import { Router } from "express";
import {
  createArmament,
  getAllArmament,
  getArmamentById,
  updateArmament,
  deleteArmament,
} from "../controllers/armament.controllers.js";

export const armamentRoutes = Router();

armamentRoutes.post("/armaments/", createArmament);
armamentRoutes.get("/armaments/", getAllArmament);
armamentRoutes.get("/armaments/:id", getArmamentById);
armamentRoutes.put("/armaments/:id", updateArmament);
armamentRoutes.delete("/armaments/:id", deleteArmament);

export default armamentRoutes;