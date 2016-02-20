// app/routes.js

module.exports = function(app) {

  // vvvvvvvvvvvvvvvvvvv  SERVER ROUTES  vvvvvvvvvvvvvvvvvvv //

  // handle things like api calls and authentication routes

  // sample api route
  app.post('/api/authenticate', function(req, res) {
    authenticate(req.body.username, req.body.password, function(status, auth) {
      res.status(status);
      res.send(auth);
    });
  });

  app.post('/api/logout', function(req, res) {
    unauth(function() {
      res.end();
    });
  });

  app.get('/api/user', function(req, res) {
    var authData = getAuth();
    res.send(authData);
  })

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // ^^^^^^^^^^^^^^^^^^^  SERVER ROUTES  ^^^^^^^^^^^^^^^^^^^ //

  // --------------------------------------------------------------------------- //

  // vvvvvvvvvvvvvvvvvvv FRONTEND ROUTES vvvvvvvvvvvvvvvvvvv //

  // route to handle all angular requests
  app.get('/login', function(req, res) {
    res.sendFile('/public/shared/Authentication/login.html', { root: __dirname + '/..' });
  });


  app.get('*', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname + '/..' }); // load our public/index.html file    
  });
  
  // ^^^^^^^^^^^^^^^^^^^ FRONTEND ROUTES ^^^^^^^^^^^^^^^^^^^ //
};