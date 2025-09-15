import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ww2navy");

    // await mongoose.connection.dropDatabase();
    // Borra toda la base de datos

    console.log("----------------");
    console.log("Conexión exitosa");
    console.log("----------------");

  } catch (error) {
    console.log("No se pudo conectar a la base de datos", error);
  }
};