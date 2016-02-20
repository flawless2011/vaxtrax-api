'use strict';
var mongo = require('../datastore/mongo');
var mongoose = require('mongoose');

var Address = module.exports = new mongoose.Schema({
  street1: String,
  street2: String,
  city: String,
  state: String,
  zip: Number
});

Address.model = mongo.datastore.model('Address', Address);
