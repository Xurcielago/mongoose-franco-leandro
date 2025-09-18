import { model, Schema, Types } from "mongoose";

export const BattleSchema = new Schema(
  {
    battle_name: {
      type: String,
      required: true,
      unique: true,
    },

    belligerents: [
      {
        name: String,
      }
    ],

    battle_date: {
      type: Date,
      required: true,
    }
  },
  {
    versionKey: false,
  }
);

export const BattleModel = model("Battle", BattleSchema);