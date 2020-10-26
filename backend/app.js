const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const app = express()
const server = require("./config/server");
const bookmarksApi = require("./routes/bookmarkApi");
const cors = require("cors");

dotenv.config();

//middleware
app.use(express.json())
app.use("/api",bookmarksApi)
app.use(cors())
app.use((req,res)=>{
    res.status(404).send({error: "not found"})
})
//db start
require('./config/db')(mongoose)

//server start
server(app)



