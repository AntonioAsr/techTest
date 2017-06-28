// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var data       = require('../data');
var path       = require('path');
app.use(express.static('frontend'))


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// send our clients our static files
     app.use(express.static(path.join(__dirname, '../frontend')));


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


// ROUTE LESSONS
// =============================================================================


let myObject = {}
let classesNoRoutesResponse = [];
        for (var item in data) {
            myObject =  data[item]['location'] + data[item][' startdate']+ data[item]['startDate']
            //console.log( myObject + "\n")
            classesNoRoutesResponse.push(myObject)
            //console.log(myObject + "\n")
        }
            //console.log(classesNoRoutesResponse)

    router.route('/lessons')
    // get all the lessons (accessed at GET http://localhost:8080/lessons)

    .get(function(req, res) {
        return res.json(classesNoRoutesResponse);
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /

