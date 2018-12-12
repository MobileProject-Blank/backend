
// import express, Body parser and Mongoose
let express = require('express')
let bodyParser = require('body-parser');

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


mongoose.connect('mongodb://localhost/blank_backend');

var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => res.send('Hello there!'));

app.all('/events', function (req, res, next) {
  console.log('Accessing events')
  next()
})

// use API routes in the app
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running BLANK back-end on port " + port);
})
