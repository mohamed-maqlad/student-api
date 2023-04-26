const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    name: String,
    originalName: String,
    mimetype: String,
    size: Number,
    path: String
  });

 module.exports= mongoose.model('Image', imageSchema);