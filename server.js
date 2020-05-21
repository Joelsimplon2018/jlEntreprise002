const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const db = require("./db")
const router = require("./router")

const app = express()
app.use(bodyParser.json())

app.set("views", "views")
app.set("view engine", "ejs")

app.use(express.static("public"))

app.use("/", router)

app.listen(8080, () => console.log("Express server is running at port no: 8080"))
