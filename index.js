const express = require("express");
const server = express();
const dbConnect = require('./config/database');
const router = require('./routes/server_routes')

require("dotenv").config();
const Port = process.env.PORT;

server.use(express.json());
dbConnect.dbConnection();



server.listen(Port);

server.use("/v1",router);
