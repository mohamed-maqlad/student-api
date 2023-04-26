const express = require("express");
const router = express.Router();
const studentUser = require("../controller/sutdentContrllor");
const auth = require("../middlewares/authMWPremission")

router
  .post("/",auth,studentUser.addNewUser)
  .get("/", studentUser.getAll)
  .get("/:id", studentUser.getUserById)
  .put("/:id", studentUser.updateUser)
  .delete("/:id",auth, studentUser.deleteUser)

module.exports = router;
