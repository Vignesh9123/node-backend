const app = require("express").Router()
const bodyparser = require("body-parser")
const Comments = require("../models/commentSchema")
app.use(bodyparser.json())
app.get("/",(req,res)=>{
    res.send("server run")
})
app.get("/:id", async(req,res)=>{
    let postId = (req.params.id);
    let comments = await Comments.find({postId})
    if(!comments){
        return res.status(400).json({"message":"Error fetching comments"})
    }
    res.json(comments)
})
app.post("/add",async(req,res)=>{
    const body = req.body
    console.log("Requested");
    console.log(body);
    
    Comments.create(body).then(()=>{
        res.json({"message":{body}}) 
    })
})
module.exports = app;