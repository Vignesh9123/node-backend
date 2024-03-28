const Users = require("../models/userSchema")
const app = require("express").Router()

app.post("/signup",async(req,res)=>{
    let body = req.body
    const {email,username,password} = body
    let userExists = await Users.findOne({email})
    if(userExists){
        res.json({"message":"User already Exists"})
    }
    userExists = await Users.findOne({username})
    if(userExists){
        res.json({"message":"Username exists"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    let createUser = await Users.create({
        email,username,password:hashedPassword
    })
    if(createUser){
        createUser.password = undefined
        res.json({"message":"Success","user":createUser})
    }
    res.json({"message":"Something went wrong","email":email})
})

module.exports = app