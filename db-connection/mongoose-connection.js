const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://prashitprakhar:faasosdb123!@ds121413.mlab.com:21413/faasosdb' || 'mongodb://localhost:27017/FaasosDB');

module.exports = { mongoose };