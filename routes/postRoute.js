const { default: getPosts } = require("../controllers/postController")
const app = require("express").Router()

app.get("/",getPosts)
module.exports = app