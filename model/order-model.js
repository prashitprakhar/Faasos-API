const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const _ = require('lodash');

const OrderSchema = new Schema({
    productid : {
        type: Number,
        required : true,
        trim : true,
        minlength : 1
    },
    productname : {
        type : String,
        required : true,
        minlength : 3,
        trim : true
    },
    quantity : {
        type : Number,
        required : true,
        minlength : 1,
        trim : true
    },
    status : {
        type : Boolean,
        default : false
    },
    timestamp : {
        type : Date,
        default : Date.now
    },
    completedAt : {
        type : Date,
        required : false,
        default : null
    }
});

const orderModel = mongoose.model('Order', OrderSchema);

module.exports = { orderModel };