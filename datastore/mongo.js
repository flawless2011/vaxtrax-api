'use strict';

var mongoose = require('mongoose');

var mongo = module.exports;
var db;

mongo.datastore = (function(){
  if(!db){
    db = mongoose.connect(process.env.MONGOLAB_URI);
  }
  return db;
})();
