import { Router } from "express";

import { armamentRoutes } from "./armament.routes.js";
import { battleRoutes } from "./battle.routes.js";
import { warshipRoutes } from "./warship.routes.js";

export const routes = Router();

routes.use(armamentRoutes);
routes.use(battleRoutes);
routes.use(warshipRoutes);