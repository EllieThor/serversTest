const con = require("../utils/database");

// CREATE (pets)
exports.insertNewPet = async (req, res) => {
  let pet = await con.execute(`INSERT INTO pets(PetName, PetType, DateOfBirth) VALUES ('${req.body.PetName}','${req.body.PetType}','${req.body.DateOfBirth}')`);
  res.send(pet[0]);
};

// READ (pets)
exports.getAllPets = async (req, res) => {
  let whichOrder = req.body.sortBy === "AtoZ" ? "ASC" : "DESC";
  let whichColumn = req.body.sortBy === "AtoZ" || req.body.sortBy === "ZtoA" ? "PetName" : req.body.sortBy === "createdAt" ? "createdAt" : "updatedAt";
  let pets = await con.execute(`SELECT * FROM pets WHERE  ${req.body.typeToFilterBy} LIKE '%${req.body.searchBy}%' ORDER BY ${whichColumn} ${whichOrder}  `);
  res.send(pets[0]);
};

// UPDATE (pets)
exports.updatePet = async (req, res) => {
  let pet = await con.execute(`UPDATE pets SET PetName='${req.body.PetName}' WHERE ID=${req.body.ID}`);
  res.send(pet[0]);
};

// DELETE (pets)
exports.deletePet = async (req, res) => {
  let pet = await con.execute(`DELETE FROM pets WHERE ID=${req.body.ID} `);
  res.send(pet[0]);
};
