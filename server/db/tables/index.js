const { createUser } = require("./user");

const initCreateTables = async () => {
  await createUser();
};

module.exports = {
  initCreateTables,
};
