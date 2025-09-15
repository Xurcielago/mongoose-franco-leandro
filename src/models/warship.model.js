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

    builder: [
      {
        name: String,
        required: false //opcional
      }
    ],

    armoured_parts: [
    {
      ship_part: {
        type: String,
        enum: ["deck", "turret", "side"],
        required: true,
      },
      thickness: {
        type: Number,
        required: true,
      }
    }],

    armaments: [
      {
        amount: {
          amount: Number,
          required: true,
        },
        weapon: {
          type: Types.ObjectId,
          ref: "weapon",
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