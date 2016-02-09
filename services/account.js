'use strict';

var User = require('../models/user');

var AccountService = module.exports;

AccountService.create = function(req, res){
  // TODO check to see if account already exists
  var user = new User(req.body);
  user.save()
    .then(
      function(result){
        res.status(200).send();
      },
      function(err){
        res.status(500).send(err);
      }
    );
};

AccountService.fetch = function(req, res){

  res.send();
};

AccountService.update = function(req, res){
  res.send();
};
