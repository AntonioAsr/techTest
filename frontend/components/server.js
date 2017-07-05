// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var data       = require('../../data');
var path       = require('path');

/*
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))*/

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// send our public directory
     app.use(express.static(path.join(__dirname, '../../dist')));


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

// ROUTE MAIN
// =============================================================================

app.get('/', function(req,res) {
  res.sendfile('dist/index.html');
});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /

