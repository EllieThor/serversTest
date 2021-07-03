const con = require("../utils/database");

// UPDATE ( products)
exports.updateStatus = async (req, res) => {
  let status = await con.execute(`UPDATE servers SET Status=1 WHERE ID=${req.body.ID}`);
  res.send(status[0]);
};
