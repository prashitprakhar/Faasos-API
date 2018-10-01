var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

const order_controller = require('./../controllers/orderController');
const prediction_controller = require('./../controllers/predictionController');

//Order Routes
//Get All Orders
router.get('/allorders', order_controller.get_all_orders);

//Placing Orders
router.post('/order', order_controller.place_order);

//Update order status
router.patch('/order/:id', order_controller.update_order_status);


//Predictions Routes
//Get All Predictions
router.get('/allpredictions', prediction_controller.get_all_predictions)
//Send Predictions
router.post('/prediction', prediction_controller.send_prediction);


module.exports = router;
