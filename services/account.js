'use strict';

var User = require('../models/user').model;
var Person = require('../models/person').model;

var AccountService = module.exports;

var saveAccount = function(authResult){
  var user = new User({
    loginId: authResult.loginId,
    loginSystem: 'Google',
    email: authResult.email,
    family: new Person({
      email: authResult.email,
      firstName: authResult.firstName,
      lastName: authResult.lastName,
      relationship: 'me'
    })
  });
  return user.save();
};

var buildAccountResponse = function(accountInfo){
  accountInfo.addPersonUrl = '/api/account/' + accountInfo.loginId + '/person';
  accountInfo.updateAccountUrl = '/api/account/' + accountInfo.loginId;
  // TODO more urls
  return accountInfo;
};

AccountService.create = function(req, res){
  // TODO check to see if account already exists
  User.findOne({loginId: req.authResult.loginId}).exec()
    .then(
      function(result){
        if (result && result.loginId === req.authResult.loginId){
          // TODO use the result object and return back some urls
          res.status(200).send(buildAccountResponse(result));
        }
        else {
          saveAccount(req.authResult)
            .then(
              function(result){
                res.status(200).send(buildAccountResponse(result));
              },
              function(err){
                res.status(500).send({error: err});
              }
            );
        }
      },
      function(err){
        res.status(500).send({error: err});
      }
    );

};

AccountService.fetch = function(req, res){
  res.send("Hello Fetch");
};

AccountService.update = function(req, res){
  res.send();
};
