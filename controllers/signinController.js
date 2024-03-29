const Users = require("../models/userSchema")
const bcrypt = require("bcrypt")
export default async function signinController(req,res){
    try{
        const {email,password} = req.body
        let userExists = await Users.findOne({email})
        if(!userExists){
           return res.json({"message":"User does not exist"})
        }
        const matchPassword = await bcrypt.compare(password,userExists.password)
        if(matchPassword){
            userExists.password = undefined
           return res.json({"message":"Success","user":userExists})
        }
        if(!matchPassword){
            return res.json({"message":"Invalid credentials"})
        }
        res.json({"message":"Something went wrong"})
    }
    catch(e){
        res.json({"message":e.message})
    }
}