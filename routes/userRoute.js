const Users = require("../models/userSchema")
const app = require("express").Router()
const bodyparser = require("body-parser")
const bcrypt = require("bcrypt")

app.use(bodyparser.json())
app.post("/signup",async(req,res)=>{
    let body = req.body

    const {email,username,password} = body
    let userExists = await Users.findOne({email})
    if(userExists){
       return res.json({"message":"User already Exists"})
    }
    userExists = await Users.findOne({username})
    if(userExists){
       return res.json({"message":"Username exists"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    let createUser = await Users.create({
        email,username,password:hashedPassword
    })
    if(createUser){
        createUser.password = undefined
       return res.json({"message":"Success","user":createUser})
    }
    res.json({"message":"Something went wrong","email":email})
})

app.post("/signin",async(req,res)=>{
    try{
    const {email,password} = req.body
    let userExists = await Users.findOne({email})
    if(!userExists){
       return res.json({"message":"User does not exist"})
    }
    const matchPassword = await bcrypt.compare(password,userExists.password)
    if(matchPassword){
        createUser.password = undefined
       return res.json({"message":"Success","user":createUser})
    }
    if(!matchPassword){
        return res.json({"message":"Invalid credentials"})
    }
    res.json({"message":"Something went wrong"})
}
catch(e){
    res.json({"message":e.message})
}
})
module.exports = app
