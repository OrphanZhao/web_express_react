const { connect } = require("../db/pool");
const { createUserTable } = require("../db/tables/user");

const initCreateTables = async () => {
  await createUserTable();
};

const initDatabase = async (req, res, next) => {
  await connect();
  await initCreateTables();
  next();
};

module.exports = { initDatabase };
