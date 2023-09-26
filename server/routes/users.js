const express = require("express");
const router = express.Router();
const { queryUser } = require("../db/tables/user");

/**
 * 获取用户列表
 */
router.get("/", async (req, res) => {
  const [rows] = await queryUser();
  res.json(rows);
});

/**
 * 创建用户
 */
router.post("/", (req, res) => {});

module.exports = router;
