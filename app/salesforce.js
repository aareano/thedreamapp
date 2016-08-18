
module.exports = function(salesforce) {
	
	var oauth2 = new jsforce.OAuth2({
		clientId :   ,
  		clientSecret: ,
  		redirectUri : 'http://localhost:8080/oauth2/callback'
	});
    
   // var mentee_records = [];

   // var oauth2 = new jsforce.OAuth2({
    

    this.oauth2 = function (){
        return oauth2.getAuthorizationUrl({ scope : 'api id web' }));
    };
    
    this.getToken () {
        
        var conn = new jsforce.Connection({ oauth2 : oauth2 });
        //var code = req.query.code;
        
        conn.authorize(code, function(err, userInfo) {
        if (err) { return console.error(err); }
      
        // Now you can get the access token, refresh token, and instance URL information.
        // Save them to establish connection next time.
      
        console.log(conn.accessToken);
        // console.log(conn.refreshToken);
        console.log(conn.instanceUrl);
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
        
      
        conn.query(, function(err, result) {
        
        if (err) { return console.error(err); }
        console.log("total : " + result.totalSize);
        console.log("fetched : " + result.records.length);
        mentee_records = result;

        });
    });
};
                       
};