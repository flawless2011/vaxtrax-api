'use strict';
var mongoose = require('mongoose');

var mongo = mongoose.connect(process.env.MONGOLAB_URI);

var Address = new mongoose.Schema({
  street1: String,
  street2: String,
  city: String,
  state: String,
  zip: Number
});

export.modules = mongo.model('Address', Address);
