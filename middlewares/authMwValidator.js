const validator = require('../util/authValidator')

module.exports= (req,res,nxt)=>{
    let valid = validator(req.body)
    if(valid){
        req.valid=1;
        nxt()
    }
    else{
        res.status(400).send("forbidden command")
    }
}