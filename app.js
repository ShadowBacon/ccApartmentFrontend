var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')
var cookieParser = require("cookie-parser")
var session = require('express-session')

//var routes = require("./routes");

var app = express();

app.set("port",process.env.PORT || 3000);
app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
   secret:"fsdagdfshgdfsjserzera",
   resave:false,
   saveUninitialized:false,
}));

app.use(express.static('views'));

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

app.listen(app.get("port"),function(){
   console.log("Server stated on port " + app.get("port"));
});