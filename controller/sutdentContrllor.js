const std = require("../models/studentUser");


//creat user 
// let addNewUser = (req,res)=>{
//     let newUser = new user({
//         name:req.body.name,
//         age:req.body.age
//     })
//     newUser.save().then(()=>{
//         console.log("added one")
//         res.status(200).send(newUser)
//     }).catch((err)=>{
//         for(let e in err.errors){
//             console.log(err.errors[e].message)
//             res.status(400).send("bad request!!!!")
//         }
//     })
// }

//getById

// let getUserById = async(req,res)=>{

//     let finduser =await user.findById(req.params.id)
//     if(! finduser) return res.status(404).send("not found")
//     res.status(200).send(finduser)

// }

//getall

// let getAll = async(req,res)=>{
//     let users = await user.find()
//     res.send(users)
// }

//update 

// let updateUser = async (req,res)=>{

//     let userup = await user.findByIdAndUpdate(req.params.id,req.body,{returnOriginal:false})

//     if(!userup) return res.status(404).send("not found")
//     res.send (userup)
// }


//detete

// let deleteUser = async(req,res)=>{
//     let std =await user.findByIdAndRemove(req.params.id)
//     if(!std) return res.status(404).send("not found ")
//     res.send(std)
// }

// creat user
let addNewUser = async (req,res)=>{
    try{
        let newUser = new std({
        name:req.body.name,
        age:req.body.age
    })
   await newUser.save()
        console.log("added one")
        res.status(200).send(newUser)
    }
    catch (err) {
        for(let e in err.errors){
            console.log(err.errors[e].message)
            res.status(400).send("bad request!!!!")
        }
    }
}


// // getById

// let getUserById = async (req,res)=>{
//     try{
//         let std = await std.findById(req.params.id)
//         if(!std) return res.status(404).send("not found")
//         res.status(200).send(std)
//     }
//     catch (err) {
//         for(let e in err.errors){
//             console.log(err.errors[e].message)
//             res.status(400).send("bad request!!!!")
//         }
//     }
// }

// //get all

// let getAll = async (req,res)=>{

//     try{
//         let std = await std.find({})
//         if (!std) return res.status(404).send("not found std!")
//         res.status(200).send(std)
//     }catch (err){

//         for ( let e in err.errors){
//             console.log(err.errors[e].message)
//             res.status(400).send("bad request!!!!")
//         }

//     }


// }

// //updateUser

// let updateUser = async(req,res)=>{
//     try{
//         let std = await std.findByIdAndUpdate(req.params.id,req.body,{returnOriginal:true})
//         if (!std) return res.status(404).send("not found !")
//         res.status(200).send(`std updated `)

//     }catch(err){
//         for(let e in err.errors){
//             console.log(err.errors[e].massege)
//             res.status(400).send("bad request!!!!")
//         }

//     }
// }

// //deleteUser

// let deleteUser = async (req,res)=>{
//     try{
//         let std = await std.findByIdAndRemove(req.params.id)
//         if(!std) return res.status(404).send("not found!")
//         res.status(200).send(`delete one ${std}`)

//     }catch (err){

//         for(let e in err.errors){
//             console.log(err.errors[e].massege)
//             res.status(400).send("bad request!!!!")
//         }


//     }
// }


let getUserById = async (req,res)=>{
    try{
        let Stdf = await std.findById(req.params.id)
        if(!Stdf) return res.status(404).send("not found")
        res.send(Stdf)


    }catch(err){
        res.status(400).send("bad request")
    }
}

// get all
let getAll = async(req,res)=>{
    try{
        let Stdf = await std.find()
        if(!Stdf) return res.status(404).send("not found")
        res.send(Stdf)
    }catch(err){
        res.status(400).send("bad request")
    }

}
//updateUser

let updateUser =async(req,res,nxt)=>{
    try{
        let Stdf = await std.findByIdAndUpdate(req.params.id,req.body,{returnOriginal:true})
        if(!Stdf) return res.status(404).send("not found")
        res.status(200).send("updated")
    }catch(err){
        res.status(400).send("bad request")
    }

}
//deleteUser

let deleteUser = async(req,res)=>{
    try{
        let Stdf = await std.findByIdAndRemove(req.params.id)
        if(!Stdf) return res.status(404).send("not found")
        res.status(200).send("deleted one")
    }catch(err){
        res.status(400).send("bad request")
    }
    
}

module.exports={
    addNewUser,
    getUserById,
    getAll,
    updateUser,
    deleteUser
}