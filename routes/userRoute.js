const app = require("express").Router()
const bodyparser = require("body-parser")
const { default: signupController } = require("../controllers/signupController")
const { default: signinController } = require("../controllers/signinController")

app.use(bodyparser.json())
app.post("/signup",signupController)
app.post("/signin",signinController)
module.exports = app
