const { connect } = require("../pool");

const createUserTable = async () => {
  const pool = await connect();
  await pool.query(`
  create table if not exists user
  (
    id int comment '用户ID' primary key auto_increment,
    nickname varchar(20) COMMENT '用户名',
    phone varchar(11) COMMENT '手机号' unique not null,
    password varchar(100) COMMENT '密码' not null,
    create_time datetime COMMENT '创建时间' not null,
    update_time datetime COMMENT '更新时间'
  ) COMMENT '用户表';
  `);
};

const queryUsers = async () => {
  const pool = await connect();
  return await pool.query(`
  select * from user;
  `);
};

const queryUser = async ({ phone }) => {
  const pool = await connect();
  return await pool.query(`
  select * from user where phone='${phone}';
  `);
};

const createUser = async ({
  nickname = null,
  phone = null,
  password = null,
}) => {
  const pool = await connect();
  return await pool.query(`
  insert into user (nickname, phone, password, create_time) values ('${nickname}', '${phone}', '${password}', now());
  `);
};

const deleteUser = async ({ id }) => {
  const pool = await connect();
  return await pool.query(`
  delete from user where id=${id};
  `);
};

module.exports = {
  createUserTable,
  queryUsers,
  queryUser,
  createUser,
  deleteUser,
};
