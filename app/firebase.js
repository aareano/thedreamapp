// app/auth.js

module.exports = function(firebase) {

  this.login = function(username, password, callback) {
    console.log("in authenticate");
    console.log(username, password);

    // https://www.firebase.com/docs/web/guide/login/password.html

    firebase.authWithPassword({
      email    : username,//"jacks@maniquin.com",
      password : password //"welldone"
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
  };

  // This is called a wrapper function, it allows for good seperation
  // of responsibility and information hiding (in this case, this
  // function helps to relegate all firebase code to this file)
  this.getUser = function() {
    var authData =  firebase.getAuth();
    console.log("getAuth: ", authData);
    return authData;
  };

  this.register = function(username, password, callback) {
    console.log("in register");
    console.log(username, password);
    // https://www.firebase.com/docs/web/api/firebase/createuser.html
    firebase.createUser({
      email: username,
      password: password
    }, function(error, userData) {
      if (error) {
        switch (error.code) {
          case "EMAIL_TAKEN":
            console.log("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            console.log("The specified email is not a valid email.");
            break;
          default:
            console.log("Error creating user:", error);
        }
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });

    callback();
  };

  this.deleteuser = function(username, password, callback) {
    console.log("in delete");
    console.log(username, password);
    firebase.removeUser({
      email: username,
      password: password
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          case "INVALID_PASSWORD":
            console.log("The specified user account password is incorrect.");
            break;
          default:
            console.log("Error removing user:", error);
        }
      } else {
        console.log("User account deleted successfully!");
      }
    });

    callback();
  }

};
