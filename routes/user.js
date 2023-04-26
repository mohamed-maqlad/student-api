const express= require("express")
const router = express.Router()
const validator = require("../middlewares/userValMidel")
const bcrypt = require("bcrypt")
require("dotenv").config()
const jwt = require("jsonwebtoken")

const user = require("../models/user")
//registration

router.post("/",validator,async(req,res)=>{
    try{

    //check alredy exites
    let useron = await user.findOne({email:req.body.email}).exec()
    if (useron){return res.status(400).send("user alread resiter")}
        
    
    else{
           // let salt = await bcrypt.genSalt(10)
    let haspsw= await bcrypt.hash(req.body.password,10)
    useron = new user({
        email:req.body.email,
        name:req.body.name,
        password:haspsw,
    })
    await useron.save()

    //jet token
    const secKey = process.env.secretkey
    
    if (!secKey)
    return res
      .status(500)
      .send("request cannot be fullfilled.... token is not defined");
    const token = useron.getAuthToken()
    // const token = jwt.sign({userid:useron._id,isAdmin:useron.isAdmin},secKey)
    res.header("x-auth-token",token)
    res.status(200).send("ok")
    }
 

    }
    catch(err){
        for(let e in err.errors){
            console.log(err.errors[e].massege)
            res.status(400).send("bad request!!!!")
        }

    }

})



module.exports = router;

// const express = require("express")
// const router = express.Router()
// const User = require("../models/user")
// const bcrypt =require("bcrypt")

// router.post("/",async(req,res)=>{
//     try{
//     let user = new User({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//     })

//    await user.save()
// }catch (err){

//     for(let e in err.errors){
//         console.log(err.errors[e].massege)
//         res.status(400).send("bad request!!!!")
//     }


// }
// })




module.exports=router;