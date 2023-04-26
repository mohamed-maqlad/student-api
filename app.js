const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// const app = express()

const errMW = require("./middlewares/errorMW");
const routerStd = require("./routes/student");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const uploadRouter = require("./routes/upload");

// hader
const port = process.env.port;
const DB_URI = process.env.DB_URI;
(async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("DB connect");
  } catch (e) {
    console.log(e.message);
    process.exit(4);
  }
  const app = express()
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use("/student", routerStd)
    .use("/user", userRouter)
    .use("/login", authRouter)
    .use("/admin", adminRouter)
    .use("/upload", uploadRouter)
    .listen(port, () => console.log(`server run port ${port}`));
})();
// mongoose.connect("")
// .then(()=>console.log("connect database..."))
// .catch((err)=>console.log(err))

// .use(errMW)

// app.listen(port,()=>console.log(`server run port ${port}`))
