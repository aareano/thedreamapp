// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var firebase       = require('firebase');
var jsforce        = require('jsforce');

// configuration ===========================================

// cheatsheet for package.json
// http://browsenpm.org/package.json#main
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our firebase database 
var firebase = new Firebase(db.url);
/*
//*************************************
var oauth2 = new jsforce.OAuth2({

  clientId : //client goes here 
  clientSecret: //secret goes here 
  redirectUri : 'https://thedreamapp.herokuapp.com/redirectUri'
});

// Spencer's working auth function//
app.get('/oauth2/auth', function(req, res) {
    console.log(req.body);
  res.redirect(oauth2.getAuthorizationUrl({ scope : 'api id web' }));
  
});
//Trying to get access token, having troubles passing in the code gotten from auth function 
app.get('/oauth2/callback', function(req, res) {
  var conn = new jsforce.Connection({ oauth2 : oauth2 });
  //var code = req.body.code;
  console.log(req);
  conn.authorize(code, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token, refresh token, and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.refreshToken);
    console.log(conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    // ...
  });
});

//******************************************
*/
// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location - /node_modules/angular will be /angular for front end
app.use('/static', express.static('node_modules')); 
app.use('/', express.static('public')); 

// auth ==================================================
require('./app/firebase')(firebase); // auth logic
require('./app/salesforce')(salesforce);

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;
exports = module.exports = firebase;
exports = module.exports = salesforce;

console.log("TEST ", process.env.TEST);
console.log("USER_SECRET ", process.env.USER_SECRET);
