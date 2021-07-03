const con = require("../utils/database");

// CREATE (treatments)
exports.insertNewTreatment = async (req, res) => {
  // `ID`, `PetId`, `VaccineId`, `createdAt`, `NextTreatment`;
  let pets = await con.execute(`INSERT INTO treatments(PetId, VaccineId, NextTreatment) VALUES ('${req.body.PetId}','${req.body.VaccineId}','${req.body.NextTreatment}')`);
  res.send(pets[0]);
};

// READ (treatments)
exports.getTreatments = async (req, res) => {
  let treatments = await con.execute(`SELECT * FROM treatments`);
  res.send(treatments[0]);
};

// UPDATE (treatments)
