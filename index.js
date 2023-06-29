const http = require('http');
const express = require("express");
// const route = require('./Router/Routes');
const userRoute=require('./Routes/userRoute');
const jsontoken = require('./middleware/auth2');
const bcrypt=require("bcrypt");
const cors=require("cors");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json())

// app.use(route);
app.use('/user',userRoute)

const Port = 3001;

const server = http.createServer(app);
server.listen(Port, () => {
    try {
        console.log(`server is running on port no.${Port}`);
    }
    catch (err) {
        console.log(err);
    }
});