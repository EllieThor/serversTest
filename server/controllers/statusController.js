const con = require("../utils/database");

// UPDATE ( products)
exports.updateStatus = async (req, res) => {
  let status = await con.execute(`UPDATE servers SET Status=${req.body.Status} WHERE ID=${req.body.ID}`);
  res.send(status[0]);
};
