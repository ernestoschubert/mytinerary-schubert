
const express = require("express");

const cors = require("cors");

const cities = require("./cities")

const app = express();

app.use(cors())

app.get("/api/cities", (req, res)=> {
    res.json({response:{cities}})
})

app.listen(4000, ()=>{console.log("Server running on port 4000")})
