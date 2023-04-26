const express = require("express")
const router = express.Router()
const multer = require("multer")
const Image = require("../models/img")

const path = require("path")


// configure multer to store uploaded files in the 'uploads' directory
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname,"../images"));
        
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  // create a multer middleware that handles the file upload
const upload = multer({ storage: storage });
// create a POST route that handles the file upload
router.post('/', upload.single('image'), async (req, res) => {

    // res.status(200).json({message:"Image uploaded successfully"})
    try {
      // create a new image 
      const image = new Image({
        name: req.file.filename,
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        path: req.file.path
      });
  
      // save the image 
      await image.save();
  
      // send a success response
      res.status(201).send('Image uploaded successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error uploading image');
    }
  });

module.exports= router;