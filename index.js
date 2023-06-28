const http = require('http');
const express = require("express");
// const route = require('./Router/Routes');
const userRoute=require('./Routes/userRoute');
const jsontoken = require('./middleware/auth2');
const bcrypt=require("bcrypt");


const app = express();

app.use(express.json())
// app.use(jsontoken())

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