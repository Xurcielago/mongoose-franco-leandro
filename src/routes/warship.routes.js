import { Router } from "express";
import {
  createWarship,
  getAllWarship,
  updateWarship,
  deleteWarship,
  getWarshipById,
} from "../controllers/warship.controllers.js";

export const warshipRoutes = Router();

warshipRoutes.post("/warships/", createWarship);
warshipRoutes.get("/warships/", getAllWarship);
warshipRoutes.get("/warships/:id", getWarshipById);
warshipRoutes.put("/warships/:id", updateWarship);
warshipRoutes.delete("/warships/:id", deleteWarship);

export default warshipRoutes;