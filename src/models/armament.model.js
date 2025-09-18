import { model, Schema, Types } from "mongoose";

export const ArmamentSchema = new Schema(
  {
    weapon_name: {
      type: String,
      required: true,
      unique: true,
    },

    type: {
      type: String,
      enum: ["aa-gun", "artillery", "aircraft", "self-propelled"],
      required: true,
    },

    barrel: {
      type: String, 
      enum: ["single", "twin", "triple", "quadruple"],
      required: false // Opcional
    },
  },
  
  {
    versionKey: false,
  }
);

export const ArmamentModel = model("Armament", ArmamentSchema);