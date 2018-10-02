var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

const order_controller = require('./../controllers/orderController');
const prediction_controller = require('./../controllers/predictionController');
const order_prediction_controller = require('./../controllers/orderPredictionController');

//Order Routes
//Get All Orders
router.get('/allorders', order_controller.get_all_orders);

//Placing Orders
router.post('/order', order_controller.place_order);

//Update order status
router.patch('/order/:id', order_controller.update_order_status);


//Predictions Routes
//Get All Predictions
router.get('/allpredictions', prediction_controller.get_all_predictions);

//Send Predictions
router.post('/prediction', prediction_controller.send_prediction);

//All data - combination of Orders+predictions
//router.get('/alldata', order_controller.get_all_data_prediction_order);

//All data from Order-prediction - alldatas collection
router.get('/alldata', order_prediction_controller.get_all_orders_predictions);

//Place Orders
router.patch('/placeorder/:id', order_prediction_controller.place_orders);

//Update Order-status
router.patch('/updatestatus/:orderid', order_prediction_controller.update_orders_status);

//Make Prediction
router.patch('/createprediction/:predictionid', order_prediction_controller.make_predictions);

//Add new Product
router.post('/addnewproduct', order_prediction_controller.add_new_product)

module.exports = router;
