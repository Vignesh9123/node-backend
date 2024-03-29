const { default: getPosts } = require("../controllers/postController")
const app = require("express").Router()

app.get("/",getPosts)
app.get("/:id", getPostbyId)
module.exports = app