const express = require("express");
const router = express.Router();
const validator = require("../middlewares/authMwValidator");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", validator, async (req, res) => {
  try {
    //check email
    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user) return res.status(400).send("Invalid Email Or Passwored!");
    //check password
    const validPasw = await bcrypt.compare(req.body.password, user.password);
    if (!validPasw) return res.status(400).send("Invalid Email Or Passwored!");
    //send res

    //token jwt

    const secKey = process.env.secretkey;
    if (!secKey)
      return res
        .status(500)
        .send("request cannot be fullfilled.... token is not defined");
    // const token = jwt.sign({ userid: user._id,isAdmin:user.isAdmin }, secKey);
    const token = user.getAuthToken();
    res.header("x-auth-token", token);
    res.status(200).send("login sucessfly");
  } catch (err) {
    for (let e in err.errors) {
      console.log(err.errors[e].massege);
      res.status(400).send("bad request!!!!");
    }
  }
});

module.exports = router;
