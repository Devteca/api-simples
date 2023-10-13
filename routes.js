const express = require("express")
const routes = express()

routes.get("/", (req, res) => res.json("API ON 🟢"))

module.exports = routes