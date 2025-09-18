import { ArmamentModel } from "../models/armament.model.js";

export const createArmament = async (req, res) => {
  const { weapon_name, type, barrel  } = req.body;
  try {
    const newArmament = await ArmamentModel.create({
      weapon_name: weapon_name,
      type: type,
      barrel: barrel,
    });
    res.status(201).json({
      msg: "Armamento creado correctamente",
      newArmament,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getAllArmament = async (req, res) => {
  try {
    const listAll = await ArmamentModel.find()
    res.status(200).json({
      msg: "Listando todos los armamentos encontrados",
      listAll,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const getArmamentById = async (req, res) => {
  const { id } = req.params;
  try {
    const findID = await ArmamentModel.findById(id)
    res.status(200).json({
      msg: "Listando armamento",
      findID,
    });
  } catch (error) {
    return res.status(500).json("Error interno del servidor", error);
  }
};

export const updateArmament = async (req, res) => {};

export const deleteArmament = async (req, res) => {};