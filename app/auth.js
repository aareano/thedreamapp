// app/auth.js

module.exports = function(firebase, firebaseTokenGenerator) {

  this.authorize = function() {
    console.log("in authorize");

    // https://www.firebase.com/docs/web/guide/login/password.html

    firebase.authWithPassword({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        return authData;
      }
    });

    console.log(process.env.TOKEN);

    var tokenGenerator = new firebaseTokenGenerator(process.env.TOKEN);
    var token = tokenGenerator.createToken({ "uid": "1", "hasEmergencyTowel": true });
    console.log("token: " + token);
  }
};
