const express = require("express");
const router = express.Router();
const {
  queryUsers,
  queryUser,
  createUser,
  deleteUser,
} = require("../db/tables/user");

/**
 * 获取用户列表
 */
router.get("/", async (req, res) => {
  const { nickname, phone } = req.params;
  const [rows] = await queryUsers();
  res.json({ code: 0, message: "", data: { users: rows } });
});

/**
 * 创建用户
 */
router.post("/", async (req, res) => {
  const { user = {} } = req.body;
  const { nickname, phone, password } = user;
  if (nickname && phone && password && phone.trim().length === 11) {
    const [rows] = await queryUser({ phone });
    await createUser({ nickname, phone, password });
    rows.length === 0
      ? res.json({ code: 0, message: "" })
      : res.json({
          code: 10001,
          message: "用户重复注册",
        });
  } else {
    res.json({ code: 10001, message: "新建用户信息不全" });
  }
});

/**
 * 删除用户
 */
router.delete("/:userId", async (req, res) => {
  const { userId } = req.params;
  if (userId) {
    await deleteUser({ id: userId });
    res.json({ code: 0, message: "" });
  } else {
    res.json({ code: 10001, message: "缺少userId" });
  }
});

module.exports = router;
