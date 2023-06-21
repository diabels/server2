const express = require ("express");
const cors = require ("cors");
const { model, default: mongoose } = require("mongoose");
require("dotenv").config({path: "./config/.env"})
require("./config/db");
require("./models/User")

const app= express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT;
app.listen(port , () => {
    console.log(`server is renning in ${port}....`)
})