// dependnecies

const express = require("express");


const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");
const bodyParser = require ("body-parser");

// serve static content form public directory
app.use(express.static("public"));
 app.use(bodyParser.urlencoded({extended:true}));
//  parse application/json
app.use(bodyParse.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// initializing express
const app = express();



// add routes
const htmlRoutes = require("");
const apiRoutes = require("");

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function (){
    console.log("listening on PORT " + PORT);
});