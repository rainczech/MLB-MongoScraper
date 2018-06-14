// dependencies

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require ("body-parser");
const axios = require("axios");
const cheerio = require("cheerio");
const logger = require("morgan");
const mongoose = require("mongoose");

// port
const PORT = process.env.PORT || 8080;


// initializing express
const app = express();

// middleware
// serve static content form public directory
app.use(express.static("public"));
// Use morgan logger for logging requests
app.use(logger("dev"));
// body-parse for handling form submissions
app.use(bodyParser.urlencoded({extended:true}));
//  parse application/json
app.use(bodyParser.json());

// set up handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");



var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/MLBScraper";

// connect to MongoDB
mongoose.connect(MONGODB_URI);
const db = require("./models");



// add routes
const htmlRoutes = require("./controllers/html-routes");
const apiRoutes = require("./controllers/api-routes");

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function (){
    console.log("listening on PORT " + PORT);
});