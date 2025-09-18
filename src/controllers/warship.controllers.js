import { WarshipModel } from "../models/warship.model.js";

export const createWarship = async (req, res) => {
  const { ship_name, type, builder, armoured_parts, armaments } =
    req.body;
  try {
    const createdWarship = await WarshipModel.create({
      ship_name: ship_name,
      type: type,
      builder: builder,
      armoured_parts: armoured_parts,
      armaments: armaments,
    });
    res.status(201).json({
      msg: "Nave creada correctamente:",
      createdWarship,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getAllWarship = async (req, res) => {
  try {
    const listAll = await WarshipModel.find()
      .populate("armaments.weapon", "-_id");
    res.status(200).json({
      msg: "Listando todas las naves encontradas en la base de datos",
      listAll,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getWarshipById = async (req, res) => {
    
};

export const updateWarship = async (req, res) => {

};

export const deleteWarship = async (req, res) => {

};

