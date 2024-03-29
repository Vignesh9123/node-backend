const { default: getPosts } = require("../controllers/postController")
const app = require("express").Router()
const {getPostbyId} = require("../controllers/postController")

app.get("/",getPosts)
app.get("/:id", getPostbyId)
module.exports = app