const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db-connection/mongoose-connection');
const { orderModel } = require('./model/order-model');
const { predictionModel } = require('./model/prediction-model');

const app = express();
const port = process.env.PORT || 3000;

const urlEncodedParser = bodyParser.urlencoded({extended : true});

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// app.get('/order', urlEncodedParser, (req, res, next) => {
//     orderModel.find().then(orders => {

//     })
// })