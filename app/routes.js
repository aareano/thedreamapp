// app/routes.js

// middleware
// - http://expressjs.com/en/guide/using-middleware.html

// difference between router- and app-level middleware
// - http://stackoverflow.com/questions/27227650/difference-between-app-use-and-router-use-in-express
// - http://stackoverflow.com/questions/29457008/whats-the-difference-between-application-and-router-level-middleware-when-rou

module.exports = function(app) {

  // NOTE, the following are equivalent:
  // - res.sendStatus(500);
  // - res.status(500).send('Internal Server Error');
  
  // feel free to add to these as needed
  HttpStatusCodes = {
    success:      { code: 200, description: "Success" },
    unauthorized: { code: 401, description: "Unauthorized" },
    notFound:     { code: 404, description: "Not Found" },
    serverError:  { code: 500, description: "Internal Sever Error" }
  }


  // vvvvvvvvvvvvvvvvvvv  SERVER ROUTES  vvvvvvvvvvvvvvvvvvv //
  // - order MATTERS when declaring middleware (everything here is middleware)

  // not sure what to do about this one yet...
  // app.get('/', function(req, res) {
  //   // TODO
  //   // res.sendFile('/public/component/Welcome/welcome.html', { root: __dirname + '/..' });
  // });
  
  app.use('*', function(req, res, next) {
    console.log("---------------------------------");
    if (req) {
      console.log(req.originalUrl, req.originalMethod);
    } else {
      console.log(req);
    }
    console.log("---------------------------------");
    next();
  })

  // display the page to the user
  app.get('/login', function(req, res) {
    console.log('get /login');
    res.sendFile('/public/shared/Authentication/authentication.html', { root: __dirname + '/..' });
  });
  // log the user into firebase
  app.post('/login', function(req, res) {
    // TODO: escape user input - should this happen on the front end?
    login(req.body.username, req.body.password, function(status, auth) {
      res.status(status);
      res.send(auth);
    });
  });
  
  // display the page to the user
  app.get('/logout', function(req, res) {
    res.sendFile('/public/shared/Authentication/authentication.html', { root: __dirname + '/..' });
  });
  // log the user out of firebase
  app.post('/logout', function(req, res) {
    logout(function() {
      res.end();
    });
  });

  app.get('/register', function(req, res) {
    res.sendFile('/public/shared/Authentication/authentication.html', { root: __dirname + '/..' });
  });
  app.post('/register', function(req, res) {
    // Todo
    res.send({nice: "You tried to register. That's so cute."});
  });
  
  // get the current user
  app.get('/user', function(req, res) {
    var authData = getUser();
    res.send(authData);
  })

  // require authentication for all other routes - DOESN'T WORK...i don't know why
  app.use(function(req, res, next) {
    var authData = getUser();
    if (!authData) {
      
      if (req.xhr) { // if AJAX request
        console.log("unauthorized, ajax request");
        res.sendStatus(HttpStatusCodes.unauthorized.code);
      } else {
        console.log("unauthorized, redirecting to login");
        res.redirect("/login");
      }
    } else {
      next();
    }
  })

  // main app page
  app.get('/', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname + '/..' });
  });

  // catch all other routes and display a Not Found page
  app.use('*', function(req, res) {
    console.log("NOTHING TO SEE HERE");
    // TODO
    // res.sendFile('/public/component/NotFound', { root: __dirname + '/..' });
  });
  
  // ^^^^^^^^^^^^^^^^^^^ FRONTEND ROUTES ^^^^^^^^^^^^^^^^^^^ //
};