'use strict';
var mongo = require('../datastore/mongo');
var mongoose = require('mongoose');

var Immunization = module.exports = new mongoose.Schema({
  name: String,
  kind: String,
  date: Date,
  dosageValue: Number,
  dosageUnit: String,
  instructions: String
});

Immunization.model = mongo.datastore.model('Immunization', Immunization);
