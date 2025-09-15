import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./src/config/database.js";
import { routes } from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// rutas
app.use("/api", routes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Servidor operativo en el puerto ${PORT}`);
});