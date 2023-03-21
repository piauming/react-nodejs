const { Energy } = require('../models');

const getAllDashboards = async (req, res) => {
  const result = await Energy.findAll();
  res.json(result);
}

module.exports = {
  getAllDashboards,
}
