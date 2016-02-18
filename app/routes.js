// app/routes.js

module.exports = function(app) {

  // vvvvvvvvvvvvvvvvvvv  SERVER ROUTES  vvvvvvvvvvvvvvvvvvv //

  // handle things like api calls and authentication routes

  // sample api route
  app.post('/api/authenticate', function(req, res) {
    authenticate(req.body.username, req.body.password, function(auth) {
      res.send(auth);
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // ^^^^^^^^^^^^^^^^^^^  SERVER ROUTES  ^^^^^^^^^^^^^^^^^^^ //

  // --------------------------------------------------------------------------- //

  // vvvvvvvvvvvvvvvvvvv FRONTEND ROUTES vvvvvvvvvvvvvvvvvvv //

  // route to handle all angular requests
  app.get('/login', function(req, res) {
    res.sendFile('/public/shared/Authentication/authenticate.html', { root: __dirname + '/..' });
  });


  app.get('*', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname + '/..' }); // load our public/index.html file    
  });
  
  // ^^^^^^^^^^^^^^^^^^^ FRONTEND ROUTES ^^^^^^^^^^^^^^^^^^^ //
};