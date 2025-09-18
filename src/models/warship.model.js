import { model, Schema, Types } from "mongoose";

export const WarshipSchema = new Schema(
  {
    ship_name: {
      type: String,
      required: true,
      unique: true,
    },
    
    type: {
      type: String,
      enum: ["aircraft_carrier", "battleship", "destroyer"],
      required: true,
    },

    builder: {
        type: String,
        // Opcional
    },

    armoured_parts: [
      {
        _id: false,
        ship_part: {
          type: String,
          enum: ["deck", "turret", "side"],
          required: true,
        },
        thickness: {
          type: String,
          required: true,
        },
      },
    ],

    armaments: [
      {
        _id: false,
        amount: {
          type: Number,
          required: true,
        },
        weapon: {
          type: Types.ObjectId,
          ref: "Armament",
          required: true,
        },
      }
    ],
  },
  
  {
    versionKey: false,
  }
);

export const WarshipModel = model("Warship", WarshipSchema);