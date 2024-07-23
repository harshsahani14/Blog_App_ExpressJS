const express = require("express");
const server = express();
const dbConnect = require('./config/database');

require("dotenv").config();
const Port = process.env.PORT;

dbConnect.dbConnection();

server.listen(Port);
