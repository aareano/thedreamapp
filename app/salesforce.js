var bluebird = require('bluebird');

module.exports = function(jsforce) {
	
	this.oauth2 = new jsforce.OAuth2({
		clientId :  "3MVG9y6x0357HlefAt8SYbvsMq_rdjhU_J3T32XYMqrNeI3QwxRLsDaG_kxcFw4_jfIqLsqkYvH.9RVABuxm5",
		clientSecret:"3745958959477854793",
  		redirectUri : 'http://localhost:8080/oauth2/callback'
	}); 
	
	this.getConnection = function(){
		var conn;
		if (!process.env.sfToken) {
          conn = new jsforce.Connection({oauth2: oauth2});
        } else {
			console.log(process.env.sfToken)
          conn = new jsforce.Connection({
            oauth2 : oauth2,
            instanceUrl : process.env.sfInstance,
            accessToken : process.env.sfToken
          });
        }
		console.log(conn)

		return conn;
	};
};