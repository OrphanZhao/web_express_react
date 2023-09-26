const { connect } = require("../db/pool");
const { initCreateTables } = require("../db/tables/index");

const initDatabase = async (req, res, next) => {
  await connect();
  await initCreateTables();
  next();
};

module.exports = { initDatabase };
