'use strict';
var Axios = require('axios');

var Middleware = module.exports;

Middleware.authenticate = function(req, res, next){
  if(req.method === 'OPTIONS'){
    next();
  }
  var googleValidateSvc = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=';
  var googleClientID = process.env.GOOGLE_CLIENT_ID;

  // Get the auth token
  var token = req.body.idToken;
  // Call google to verify
  Axios.get(googleValidateSvc + token)
    .then(
      // If good, go next
      function(response){
        var result = response.data;
        if(result.aud === googleClientID){
          req.authResult = {
            loginId: result.sub,
            email: result.email,
            firstName: result.given_name,
            lastName: result.family_name
          }
          next();
        }
        else {
          res.status(401).send({error: 'Bad token'});
        }
      },
      // If bad, return 401
      function(err){
        res.status(401).send({error: err});
      }
    );
};
