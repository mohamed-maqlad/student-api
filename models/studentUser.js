const mongoose = require("mongoose");

const stdSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlenth:30
    },
    age:{
        type:Number,
        required:true,
        min:2,
        max:30
    }
})

module.exports= mongoose.model("Std",stdSchema)