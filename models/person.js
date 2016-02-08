'use strict';
var mongoose = require('mongoose');
var Address = require('./address');
var Immunization = require('./immunization');

var mongo = mongoose.connect(process.env.MONGOLAB_URI);

var Person = new mongoose.Schema({
  email: String,
  firstName: String,
  middleName: String,
  lastName: String,
  birthDate: Date,
  gender: String,
  address: Address,
  relationship: String,
  immunizations: [Immunization]
});
// TODO need to do some enforcement of type for gender and relationship

export.modules = mongo.model('Person', Person);
