const express = require("express");
const server = express();

require("dotenv").config();
const Port = process.env.PORT;

server.listen(Port);
