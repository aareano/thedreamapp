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

  this.register = function(username, password, password2, callback) {
    console.log("in register");
    console.log(username, password, password2);
    if (password != password2) {
      console.log("Error: the two passwords entered do not match");
    } else {
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
    }
    callback();
  };

  this.deleteuser = function(username, password, callback) {
    console.log("in delete");
    console.log(username, password);

    // https://www.firebase.com/docs/web/api/firebase/removeuser.html
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
  };

  this.changePassword = function(username, oldpassword, newpassword, callback) {
    console.log("in change password");
    console.log(username, oldpassword, newpassword);

    // https://www.firebase.com/docs/web/api/firebase/changepassword.html
    firebase.changePassword({
      email: username,
      oldPassword: oldpassword,
      newPassword: newpassword
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_PASSWORD":
            console.log("The specified user account password is incorrect.");
            break;
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error changing password:", error);
        }
      } else {
        console.log("User password changed successfully!");
      }
    });

    callback();
  };

  this.changeEmail = function(oldusername, newusername, password, callback) {
    console.log("in change email");
    console.log(oldusername, newusername, password);

    //https://www.firebase.com/docs/web/api/firebase/changeemail.html
    firebase.changeEmail({
      oldEmail: oldusername,
      newEmail: newusername,
      password: password
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_PASSWORD":
            console.log("The specified user account password is incorrect.");
            break;
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error creating user:", error);
        }
      } else {
        console.log("User email changed successfully!");
      }
    });

    callback();
  };

  this.resetPassword = function(username, callback) {
    console.log("in reset password");
    console.log(username);

    // https://www.firebase.com/docs/web/api/firebase/resetpassword.html
    firebase.resetPassword({
      email: username
    }, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_USER":
            console.log("The specified user account does not exist.");
            break;
          default:
            console.log("Error resetting password:", error);
        }
      } else {
        console.log("Password reset email sent successfully!");
      }
    });

    callback();
  };

};
