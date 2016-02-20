'use strict';
var mongo = require('../datastore/mongo');
var mongoose = require('mongoose');
var Address = require('./address');
var Immunization = require('./immunization');

var Person = module.exports = new mongoose.Schema({
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

Person.model = mongo.datastore.model('Person', Person);
