const mysql = require("mysql2/promise");
const chalk = require("chalk");

let pool = null;

const options = {
  host: "localhost",
  user: "root",
  database: "snow",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

const connect = async () => {
  if (!!pool) return pool;
  pool = await mysql.createPool({ ...options });
  console.log(chalk.green(">>>> 数据库连接成功 <<<<"));
  return pool;
};

module.exports = {
  connect,
};
