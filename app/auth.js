// app/auth.js

module.exports = function(firebase) {

  this.authenticate = function(username, password, callback) {
    console.log("in authenticate");

    // https://www.firebase.com/docs/web/guide/login/password.html

    firebase.authWithPassword({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        return {}; // return empty object
      } else {
        console.log("Authenticated successfully with payload:", authData);
        callback(authData);
      }
    });
  }
};
