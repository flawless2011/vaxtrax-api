'use strict';
var mongoose = require('mongoose');
var Person = require('./person');

var mongo = mongoose.connect(process.env.MONGOLAB_URI);

var User = new mongoose.Schema({
  loginId: String,
  loginSystem: String,
  email: String,
  family: [Person]
});

export.modules = mongo.model('User', User);
