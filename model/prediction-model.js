const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const _ = require('lodash');

const PredictionSchema = new Schema({
    productid : {
        type: Number,
        required : true,
        trim : true,
        minlength : 1,
        unique : true
    },
    productname : {
        type : String,
        required : true,
        minlength : 3,
        trim : true
    },
    predictedquantity : {
        type : Number,
        required : true,
        minlength : 1,
        trim : true
    },
    timestamp : {
        type : Date,
        default : Date.now
    }
});


// PredictionSchema.statics.createAndSendAll = function(req, res, next) {

//    // const userInfoModel = this;
//    // let decoded;

//     // try {
//     //     decoded = jwt.verify(token, 'abc123')
//     // }
//     // catch (err){
//     //     // return new Promise((resolve, reject) => {
//     //     //     reject();
//     //     // });
//     //     return Promise.reject();
//     // }

//     const predictionModelCustom = this;

//     predictionModelCustom.save().then(() => {
//         predictionModelCustom.find().then(data => {
//             if(data){
//                 return new Promise((resolve, reject) => {
//                     resolve(data);
//                 })
//             }else{
//                 return Promise.reject();
//             }
            
//         })
//     })
// }

const predictionModel = mongoose.model('Prediction', PredictionSchema);

module.exports = { predictionModel };