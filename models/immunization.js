'use strict';
var mongoose = require('mongoose');

var mongo = mongoose.connect(process.env.MONGOLAB_URI);

var Immunization = new mongoose.Schema({
  name: String,
  kind: String,
  date: Date,
  dosageValue: Number,
  dosageUnit: String,
  instructions: String
});

export.modules = mongo.model('Immunization', Immunization);
