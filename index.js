const express = require("express");
const homeRoute = require("./routes/home");
const shortUrl = require("./routes/url")


const app = express();

//middlewares

//to understand Json
app.use(express.json()); 

// to be able to view main page
app.use(express.static("public")); 

//accept request.body (to understand post request)
app.use(express.urlencoded({extended: false})); 

//routes
app.use('/urlapi', shortUrl);
app.use('/',homeRoute);


const PORT = 8080;

app.listen(PORT, () => {console.log("server is working just fine @", PORT)})

