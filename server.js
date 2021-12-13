require('dotenv').config();
const express = require("express");
const cors = require("cors");
const Router = require('./routes/routes');
const app = express();
const passport = require('passport');
require('./config/database');

app.use(cors());
app.use(express.json());
app.use('/api', Router);
app.use(passport.initialize());

app.listen(4000, () => console.log("Server running on port 4000"));
