
require("dotenv").config();
const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const errorHandler = require("./middlewares/errorHandler")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/e_commerce' + NODE_ENV, {useNewUrlParser:true});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes"))
app.use(errorHandler)



module.exports = app;