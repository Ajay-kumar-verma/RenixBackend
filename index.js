const express =require('express');
const app=express();
const cors = require("cors"); app.use(cors());
app.use(express.json());
require('./config');

app.use(require('./app.js'));

app.listen(3000,_=>console.log("Server is running at port 3000"));

