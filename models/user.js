'use strict';
var mongo = require('../datastore/mongo');
var mongoose = require('mongoose');
var Person = require('./person');

var User = module.exports = new mongoose.Schema({
  loginId: String,
  loginSystem: String,
  email: String,
  family: [Person]
});

User.model = mongo.datastore.model('User', User);
