// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// cheatsheet for package.json
// http://browsenpm.org/package.json#main
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our firebase database 
// (uncomment after you enter in your own credentials in config/db.js)
// var myFirebaseRef = new Firebase(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location - /node_modules/angular will be /angular for users
app.use('/static', express.static('node_modules')); 
app.use('/', express.static('public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;