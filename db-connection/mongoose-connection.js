const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://faasos123:faasos123@ds121753.mlab.com:21753/heroku_jt6ng3gz' || 'mongodb://localhost:27017/FaasosDB');

module.exports = { mongoose };