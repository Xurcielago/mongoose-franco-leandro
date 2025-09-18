import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./src/config/database.js";
import { routes } from "./src/routes/index.js";

const app = express();
const PORT = 3600;

// middlewares
app.use(express.json());
app.use(cors());

// rutas
app.use("/api", routes);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Servidor operativo en https://localhost:${PORT}`);
  } catch (error) {
    console.log("Error al conectar con MongoDB", error);
  }
});