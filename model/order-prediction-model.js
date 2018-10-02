const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const _ = require('lodash');

const OrderPredictionSchema = new Schema({
    productid: {
        type: Number,
        required: true,
        minlength: 1,
        trim : true,
        unique: true
    },
    productname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
        unique: true
    },
    prediction: [
        {
            predictedquantity: {
                type: Number,
                required : true,
                minlength: 1,
                trim: true
            },
            predictiontimestamp: {
                type: Date,
                default: Date.now
            }
        }
    ],
    orders: [
        {
            username: {
                type: String,
                default : 'New User',
                minlength: 5,
                trim: true
            },
            orderedamount: {
                type: Number,
                required : true,
                minlength: 1,
                trim: true
            },
            ordertimestamp: {
                type: Date,
                default: Date.now
            },
            status: {
                type: Boolean,
                default: false
            },
            completedat: {
                type: Date,
                required: false,
                default: null
            }
        }
    ],
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const orderPredictionModel = mongoose.model('alldata', OrderPredictionSchema);

module.exports = { orderPredictionModel };