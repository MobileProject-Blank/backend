
// import express
let express = require('express');
// import Body parser
let bodyParser = require('body-parser');
// import Mongoose
let mongoose = require('mongoose');
//ini the app
let app = express();

// import routes
let apiRoutes = require("./api-routes")

// config bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/blank_backend');

var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;

// Send msg for default URL
app.get('/', (req, res) => res.send('Hello there!'));

// use API routes in the app
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running BLANK back-end on port " + port);
})
