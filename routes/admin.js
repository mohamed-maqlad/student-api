//update one user for admin

const express = require("express")
const router = express.Router()
const user = require("../models/user")
const auth = require("../middlewares/authMWPremission")
const { findByIdAndUpdate } = require("../models/studentUser")

router.put("/:id",auth,async(req,res)=>{
    try{
        let User = await user.findByIdAndUpdate({_id:req.params.id},{isAdmin:true})
        if(!User) return res.status(401).send("not found")
        res.status(200).send("user role is admin true")
    }catch(err){
        res.status(400).send("bad request!")
    }
  
})

module.exports=router;