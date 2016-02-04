 // app/routes.js

module.exports = function(app) {

    // vvvvvvvvvvvvvvvvvvv  SERVER ROUTES  vvvvvvvvvvvvvvvvvvv //

    // handle things like api calls and authentication routes

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // do api stuff
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // ^^^^^^^^^^^^^^^^^^^  SERVER ROUTES  ^^^^^^^^^^^^^^^^^^^ //

    // --------------------------------------------------------------------------- //

    // vvvvvvvvvvvvvvvvvvv FRONTEND ROUTES vvvvvvvvvvvvvvvvvvv //

    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('/public/index.html', { root: __dirname + '/..' }); // load our public/index.html file
    });
    
    // ^^^^^^^^^^^^^^^^^^^ FRONTEND ROUTES ^^^^^^^^^^^^^^^^^^^ //
};