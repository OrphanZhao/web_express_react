const { connect } = require("../pool");

const createUser = async () => {
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

const queryUser = async () => {
  const pool = await connect();
  return await pool.query(`
  select * from user;
  `);
};

module.exports = { createUser, queryUser };
