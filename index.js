const http = require('http');
const express = require("express");
// const route = require('./Router/Routes');
const userRoute=require('./Routes/userRoute')

const app = express();

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