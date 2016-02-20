// app/auth.js

module.exports = function(firebase) {

  this.login = function(username, password, callback) {
    console.log("in authenticate");

    // https://www.firebase.com/docs/web/guide/login/password.html

    firebase.authWithPassword({
      email    : "jacks@maniquin.com",
      password : "welldone"
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        status = 401;
        callback(status, error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        status = 200;
        callback(status, authData);
      }
    }, {
      remember: "sessionOnly"     // we're supposed to be able to set this in on the firebase dashboard.
                                  // I couldn't find the option setting though.
    });
  };

  // this is also a wrapper
  this.logout = function(callback) {
    var un = firebase.unauth();
    console.log("unauth: ", un);
    callback();
  }

  // This is called a wrapper function, it allows for good seperation
  // of responsibility and information hiding (in this case, this
  // function helps to relegate all firebase code to this file)
  this.getUser = function() {
    var authData =  firebase.getAuth();
    console.log("getAuth: ", authData);
    return authData;
  }

};
