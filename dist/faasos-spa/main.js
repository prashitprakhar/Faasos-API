(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 62.5%;\r\n}\r\n\r\nh1 {\r\n    font-size: 5.2rem;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 0;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\"><h1>Faasos - Order Food Online, Eat Good - Eat Exciting</h1></div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'faasos-spa';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_all_details_all_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/all-details/all-details.component */ "./src/app/components/all-details/all-details.component.ts");
/* harmony import */ var _components_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-order/create-order.component */ "./src/app/components/create-order/create-order.component.ts");
/* harmony import */ var _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/not-found-page/not-found-page.component */ "./src/app/components/not-found-page/not-found-page.component.ts");
/* harmony import */ var _components_predictions_predictions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/predictions/predictions.component */ "./src/app/components/predictions/predictions.component.ts");
/* harmony import */ var _components_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/success-page/success-page.component */ "./src/app/components/success-page/success-page.component.ts");
/* harmony import */ var _components_failure_page_failure_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/failure-page/failure-page.component */ "./src/app/components/failure-page/failure-page.component.ts");
/* harmony import */ var _components_orders_display_orders_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/orders-display/orders-display.component */ "./src/app/components/orders-display/orders-display.component.ts");
/* harmony import */ var _components_show_all_prediction_data_show_all_prediction_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/show-all-prediction-data/show-all-prediction-data.component */ "./src/app/components/show-all-prediction-data/show-all-prediction-data.component.ts");
/* harmony import */ var _components_add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-new-product/add-new-product.component */ "./src/app/components/add-new-product/add-new-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_all_details_all_details_component__WEBPACK_IMPORTED_MODULE_8__["AllDetailsComponent"],
                _components_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_9__["CreateOrderComponent"],
                _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundPageComponent"],
                _components_predictions_predictions_component__WEBPACK_IMPORTED_MODULE_11__["PredictionsComponent"],
                _components_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_12__["SuccessPageComponent"],
                _components_failure_page_failure_page_component__WEBPACK_IMPORTED_MODULE_13__["FailurePageComponent"],
                _components_orders_display_orders_display_component__WEBPACK_IMPORTED_MODULE_14__["OrdersDisplayComponent"],
                _components_show_all_prediction_data_show_all_prediction_data_component__WEBPACK_IMPORTED_MODULE_15__["ShowAllPredictionDataComponent"],
                _components_add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_16__["AddNewProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _components_all_details_all_details_component__WEBPACK_IMPORTED_MODULE_8__["AllDetailsComponent"]
                    },
                    {
                        path: 'createorder',
                        component: _components_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_9__["CreateOrderComponent"]
                    },
                    {
                        path: 'orders',
                        component: _components_orders_display_orders_display_component__WEBPACK_IMPORTED_MODULE_14__["OrdersDisplayComponent"]
                    },
                    {
                        path: 'predictions',
                        component: _components_predictions_predictions_component__WEBPACK_IMPORTED_MODULE_11__["PredictionsComponent"]
                    },
                    {
                        path: 'allPredictions',
                        component: _components_show_all_prediction_data_show_all_prediction_data_component__WEBPACK_IMPORTED_MODULE_15__["ShowAllPredictionDataComponent"]
                    },
                    {
                        path: 'ordersuccess',
                        component: _components_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_12__["SuccessPageComponent"]
                    },
                    {
                        path: 'orderfailure',
                        component: _components_failure_page_failure_page_component__WEBPACK_IMPORTED_MODULE_13__["FailurePageComponent"]
                    },
                    {
                        path: 'addnewproduct',
                        component: _components_add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_16__["AddNewProductComponent"]
                    },
                    {
                        path: '**',
                        component: _components_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundPageComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-new-product/add-new-product.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/add-new-product/add-new-product.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, tr, th, td {\r\n    border: 2px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n form { \r\n     width: 50%;\r\n     padding: 100px, 20px;\r\n }\r\n\r\n .input-section {\r\n     padding : 40px;\r\n }\r\n\r\n input {\r\n     width : 100px;\r\n }\r\n\r\n label  {\r\n     width : 140px;\r\n     font-size : 18px;\r\n }"

/***/ }),

/***/ "./src/app/components/add-new-product/add-new-product.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/add-new-product/add-new-product.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-md-6\">\r\n  <div class=\"input-section\">\r\n    <u><h1>Add New Product</h1></u><br>\r\n  <form>\r\n      <div class=\"form-group\">\r\n      <label for=\"productName\">Enter Product Name : </label>\r\n      <input type=\"text\" calss=\"form-control\" id=\"productName\" name=\"productName\" [(ngModel)]=\"productName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"productId\">Enter Product ID : </label> &nbsp;\r\n      <input type=\"text\" calss=\"form-control\" id=\"productId\" name=\"productId\" [(ngModel)]=\"productId\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" clas=\"btn btn-success\" (click)=\"addNewProduct()\">Create</button>\r\n      </div>\r\n  </form>\r\n  </div>\r\n</div>\r\n  <div class=\"col-md-6\">\r\n    <button class=\"btn btn-primary\" (click)=\"navigateToHomepage()\">Home Page</button>\r\n  </div>\r\n\r\n</div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/add-new-product/add-new-product.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-new-product/add-new-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddNewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewProductComponent", function() { return AddNewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_add_new_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/add-new-product.service */ "./src/app/services/add-new-product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/rxjs/add/operator/finally */ "./node_modules/rxjs/add/operator/finally.js");
/* harmony import */ var _node_modules_rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewProductComponent = /** @class */ (function () {
    function AddNewProductComponent(addNewProductService, router) {
        this.addNewProductService = addNewProductService;
        this.router = router;
        this.isFinally = false;
        this.subscribedData = [];
        this.newProductTemplate = {
            productid: 0,
            productname: '',
            prediction: [
                {
                    predictedquantity: -1
                }
            ],
            orders: [
                {
                    orderedamount: -1
                }
            ]
        };
    }
    AddNewProductComponent.prototype.ngOnInit = function () {
    };
    AddNewProductComponent.prototype.addNewProduct = function () {
        var _this = this;
        this.newProductTemplate = {
            productid: this.productId,
            productname: this.productName,
            prediction: [
                {
                    predictedquantity: -1
                }
            ],
            orders: [
                {
                    orderedamount: -1
                }
            ]
        };
        this.addNewProductService.addNewProductPromise(this.newProductTemplate).then(function (data) {
            var confirmationMessage = confirm("You have successfully added new item to the Menu... Click OK to navigate to Home page. Cancel to add more products.");
            if (confirmationMessage) {
                _this.router.navigate(['/']);
            }
        }).catch(function (err) {
            alert("OOPS... Something went wrong... Please try again..");
        });
    };
    AddNewProductComponent.prototype.navigateToHomepage = function () {
        this.router.navigate(['/']);
    };
    AddNewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-product',
            template: __webpack_require__(/*! ./add-new-product.component.html */ "./src/app/components/add-new-product/add-new-product.component.html"),
            styles: [__webpack_require__(/*! ./add-new-product.component.css */ "./src/app/components/add-new-product/add-new-product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_add_new_product_service__WEBPACK_IMPORTED_MODULE_1__["AddNewProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddNewProductComponent);
    return AddNewProductComponent;
}());



/***/ }),

/***/ "./src/app/components/all-details/all-details.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/all-details/all-details.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prediction-table-division {\r\n    padding : 40px;\r\n}\r\n\r\n.prediction-table{\r\n    border: 4px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n.prediction-tr {\r\n    border: 4px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.prediction-td { \r\n    border: 4px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.downloadable-table { \r\n    border: 2px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n.downloadable-td {\r\n    border: 2px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n.downloadable-tr { \r\n    border: 2px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n.buttons {\r\n     padding : 6px;\r\n }\r\n\r\n.button-pdf {\r\n     padding : 6px;\r\n     color: white;\r\n     background-color: #4CAF50; /* Green */\r\n     border: none;\r\n     text-align: center;\r\n     text-decoration: none;\r\n     display: inline-block;\r\n     font-size: 16px;\r\n }\r\n\r\n.pdf-download {\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    padding : 20px;\r\n }\r\n\r\nlabel {\r\n    font-size : 18px;\r\n}\r\n\r\n\r\n "

/***/ }),

/***/ "./src/app/components/all-details/all-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-details/all-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-md-8 prediction-table-division\">\r\n  <u><h1>All Details Page - Home Page</h1></u><br>\r\n  <table class=\"prediction-table\" *ngIf=\"!pdfDownload\">\r\n    <tr class=\"prediction-tr\">\r\n      <th class=\"prediction-tr\">Product ID</th>\r\n      <th class=\"prediction-tr\">Product Name</th>\r\n      <th class=\"prediction-tr\">Quantity</th>\r\n      <th class=\"prediction-tr\">Created-till-now</th>\r\n      <th class=\"prediction-tr\">Predicted</th>\r\n      <th class=\"prediction-tr\">Status</th>\r\n      <th class=\"prediction-tr\">Ordered Time</th>\r\n      <th class=\"prediction-tr\">Current Status</th>\r\n    </tr>\r\n    <tr class=\"prediction-tr\" *ngFor=\"let order of finalDataArray\">\r\n      <td class=\"prediction-tr\">{{order.productId}}</td>\r\n      <td class=\"prediction-tr\">{{order.productName}}</td>\r\n      <td class=\"prediction-tr\">{{order.quantity > 0 ? order.quantity : ((!order.createdTillNow) ? 'No Orders received today...' : 'Order complete')}}\r\n      </td>\r\n      <td class=\"prediction-tr\">{{order.createdTillNow}}</td>\r\n      <td class=\"prediction-tr\">{{order.predictedQuantity !== -1 ? order.predictedQuantity : 'No prediction Data' }}</td>\r\n      <td class=\"prediction-tr\" *ngIf=\"order.quantity > 0 && order.predictedQuantity && !order.status\" class=\"btn btn-primary\"\r\n        (click)=\"updateStatus(order)\">Done</td>\r\n      <td class=\"prediction-tr\" *ngIf=\"!(order.quantity > 0 && order.predictedQuantity && !order.status)\" class=\"btn btn-primary\"\r\n        disabled>Done</td>\r\n      <td class=\"prediction-tr\">{{ order.orderTimestamp }}</td>\r\n      <td class=\"prediction-tr\" *ngIf=\"order.status\" style=\"background-color:green;\">{{ 'Completed' }}</td>\r\n      <td class=\"prediction-tr\" *ngIf=\"!order.status && (order.quantity === -1) && !order.createdTillNow\" style=\"background-color:blue;\">{{ 'No Orders Today' }}</td>\r\n      <td class=\"prediction-tr\" *ngIf=\"(!order.status && (order.quantity > -1))\" style=\"background-color:yellow;\">{{ 'In Progress' }}</td>\r\n      <td class=\"prediction-tr\" *ngIf=\"(order.quantity === 0 && order.predictedQuantity===-1)\" style=\"background-color:yellow;\">{{ 'No Status' }}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<div class=\"col-md-4\">\r\n  <div class=\"buttons\">\r\n    <input type=\"button\" value=\"Download PDF\" (click)=\"captureScreen()\" class=\"button-pdf\"/>\r\n  </div>\r\n\r\n\r\n<div class=\"buttons\">\r\n  <button class=\"btn btn-primary\" (click)=\"navigateToSendPrediction()\">Go to send Prediction page</button> \r\n</div>\r\n<div class=\"buttons\"><button class=\"btn btn-primary\" (click)=\"navigateToPlaceOrder()\">Create new Order page</button> &nbsp; &nbsp;</div>\r\n  \r\n <div class=\"buttons\"><button class=\"btn btn-primary\" (click)=\"addNewProduct()\">Add new Product page</button></div> \r\n\r\n\r\n<!-- for PDF Generation -->\r\n<div style=\"opacity: 0;\">\r\n  <div class=\"pdf-download\" id=\"contentToConvert\">\r\n    <h1>Production - Prediction Report</h1>\r\n    <table class=\"downloadable-table\">\r\n      <tr class=\"downloadable-tr\">\r\n        <th class=\"downloadable-td\">Dish Name</th>\r\n        <th class=\"downloadable-td\">Produced</th>\r\n        <th class=\"downloadable-td\">Predicted</th>\r\n      </tr>\r\n      <tr class=\"downloadable-table\" *ngFor=\"let order of arrayUnique\">\r\n        <td class=\"downloadable-td\">{{order.productName}}</td>\r\n        <td class=\"downloadable-td\">{{order.createdTillNow}}</td>\r\n        <td class=\"downloadable-td\">{{order.predictedQuantity !== -1 ? order.predictedQuantity : 'No prediction Data' }}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/all-details/all-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/all-details/all-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllDetailsComponent", function() { return AllDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_all_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/all-details.service */ "./src/app/services/all-details.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllDetailsComponent = /** @class */ (function () {
    function AllDetailsComponent(allDetailsService, router) {
        this.allDetailsService = allDetailsService;
        this.router = router;
        this.allDataArray = [];
        this.finalDataArray = [];
        this.arrayUnique = [];
        this.orderDetails = {
            productId: null,
            productName: '',
            quantity: null,
            createdTillNow: null,
            predictedQuantity: null,
            status: false,
            predictionId: '',
            orderId: '',
            orderTimestamp: null,
            isDefault: true
        };
        this.completedCount = {};
        this.pdfDownload = false;
        this.base64Img = null;
        this.margins = {
            top: 70,
            bottom: 40,
            left: 30,
            width: 550
        };
    }
    AllDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allDetailsService.getAllData().subscribe(function (data) {
            if (data.length > 0) {
                _this.processData(data);
            }
        });
    };
    AllDetailsComponent.prototype.processData = function (data) {
        var _this = this;
        this.completedCount = {};
        var allData = [];
        allData = data;
        allData.forEach(function (row) {
            _this.createdTillNowCalculation(row.productid, row.orders);
            if (row.orders.length > 1) {
                row.orders.forEach(function (product) {
                    if (product.username !== 'New User') {
                        _this.prepareFinalDataArray(product, row, _this.completedCount[row.productid]);
                    }
                });
            }
            else if (row.orders.length === 1) {
                _this.prepareFinalDataArray(row.orders[0], row, 0);
            }
        });
        this.arrayUnique = this.generateDataForPDF(this.finalDataArray);
    };
    AllDetailsComponent.prototype.prepareFinalDataArray = function (product, row, completedTillNow) {
        this.orderDetails = {
            productId: row.productid,
            productName: row.productname,
            quantity: product.orderedamount,
            createdTillNow: completedTillNow,
            predictedQuantity: row.prediction[0].predictedquantity,
            status: product.status,
            predictionId: row._id,
            orderId: product._id,
            orderTimestamp: product.ordertimestamp,
            isDefault: false
        };
        this.finalDataArray.push(this.orderDetails);
        return;
    };
    AllDetailsComponent.prototype.createdTillNowCalculation = function (productId, allOrdersArray) {
        var _this = this;
        allOrdersArray.forEach(function (product) {
            if (product.status) {
                _this.completedCount[productId] = typeof _this.completedCount[productId] === 'number' ?
                    _this.completedCount[productId] + product.orderedamount :
                    product.orderedamount;
            }
        });
    };
    AllDetailsComponent.prototype.updateStatus = function (orderDetails) {
        var _this = this;
        this.allDetailsService.updateOrderStatus(orderDetails.orderId).subscribe(function (data) {
            _this.finalDataArray = [];
            _this.processData(data);
        });
    };
    AllDetailsComponent.prototype.generateDataForPDF = function (dataArray) {
        dataArray = dataArray.filter(function (thing, index, self) {
            return index === self.findIndex(function (t) { return (t.productId === thing.productId); });
        });
        return dataArray;
    };
    AllDetailsComponent.prototype.captureScreen = function () {
        var _this = this;
        var data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_3__(data, {
            onclone: function () {
                data.style.opacity = '1';
            }
        })
            .then(function (canvas) {
            //setTimeout(data.style.opacity = '0', 2000);
            setTimeout(_this.renderingPDF(canvas), 3000);
        });
    };
    AllDetailsComponent.prototype.renderingPDF = function (canvas) {
        var imgWidth = 200;
        var pageHeight = 400;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var contentDataURL = canvas.toDataURL('image/png');
        var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('production-report.pdf'); // Generated PDF   
    };
    AllDetailsComponent.prototype.navigateToSendPrediction = function () {
        this.router.navigate(['/predictions']);
    };
    AllDetailsComponent.prototype.navigateToPlaceOrder = function () {
        this.router.navigate(['/createorder']);
    };
    AllDetailsComponent.prototype.addNewProduct = function () {
        this.router.navigate(['/addnewproduct']);
    };
    AllDetailsComponent.prototype.ngOnChanges = function () {
    };
    AllDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-details',
            template: __webpack_require__(/*! ./all-details.component.html */ "./src/app/components/all-details/all-details.component.html"),
            styles: [__webpack_require__(/*! ./all-details.component.css */ "./src/app/components/all-details/all-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_all_details_service__WEBPACK_IMPORTED_MODULE_1__["AllDetailsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AllDetailsComponent);
    return AllDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/create-order/create-order.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/create-order/create-order.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, tr, th, td {\r\n    border: 2px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n form { \r\n     width: 40%;\r\n     padding: 40px;\r\n }\r\n\r\n option {\r\n     width : 250px;\r\n }\r\n\r\n select {\r\n    width : 230px;\r\n }\r\n\r\n label {\r\n    font-size : 18px;\r\n}\r\n\r\n /* \r\n .input-section {\r\n     padding : 40px;\r\n }\r\n\r\n input {\r\n     width : 100px;\r\n }\r\n\r\n label  {\r\n     width : 200px;\r\n }\r\n\r\n select {\r\n    width : 200px;\r\n } */"

/***/ }),

/***/ "./src/app/components/create-order/create-order.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-order/create-order.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-md-6\">\r\n  <div class=\"input-section\">\r\n  <form>\r\n      <u><h1>Place new Order</h1></u> <br>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username : </label><br>\r\n      <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"productName\">Select Product : </label><br>\r\n      <select name=\"selectedProductObject\" id=\"selectedProductObject\" [(ngModel)]=\"selectedProductObject\">\r\n        <option value=\"0\">-- Select --</option>\r\n        <option *ngFor=\"let product of allProducts\" value={{product._id}}>\r\n          {{product.productname}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"orderedQuantity\">Quantity : </label><br>\r\n      <input type=\"text\" class=\"form-control\" id=\"orderedQuantity\" name=\"orderedQuantity\" [(ngModel)]=\"orderedQuantity\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" clas=\"btn btn-success\" (click)=\"createOrder()\">Order</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  <button class=\"btn btn-primary\" (click)=\"navigateToHomepage()\">Home Page</button>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/create-order/create-order.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-order/create-order.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderComponent", function() { return CreateOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateOrderComponent = /** @class */ (function () {
    //private publicIp = require('public-ip');
    function CreateOrderComponent(ordersService, router) {
        var _this = this;
        this.ordersService = ordersService;
        this.router = router;
        this.productID = [];
        this.productName = [];
        this.username = '';
        this.orderPayload = {
            order: {
                username: '',
                orderedamount: -1
            }
        };
        this.allOrdersForUser = [];
        this.allOrderDetails = [];
        this.ordersService.subscribeAllProducts().subscribe(function (data) {
            if (data.length > 0) {
                _this.allProducts = data;
            }
        });
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            setInterval(function () { _this.getAllOrders(); }, 1000);
        });
    };
    CreateOrderComponent.prototype.getAllOrders = function () {
        var _this = this;
        this.allOrdersForUser = [];
        this.ordersService.getAllOrders().subscribe(function (orders) {
            _this.allOrdersForUser = [];
            Object.keys(orders).map(function (key) {
                _this.allOrdersForUser.push(orders[key]);
            });
        });
    };
    CreateOrderComponent.prototype.filterProducts = function (selectedProductName) {
        this.selectedProductName = selectedProductName;
    };
    CreateOrderComponent.prototype.preparePayload = function () {
        var _this = this;
        this.selectedProduct = this.allProducts.filter(function (data) {
            return _this.selectedProductName === data.productname;
        });
        this.orderPayload = {
            order: {
                username: this.username,
                orderedamount: this.orderedQuantity
            }
        };
    };
    CreateOrderComponent.prototype.createOrder = function () {
        var _this = this;
        this.preparePayload();
        this.allOrdersForUser = [];
        this.preparePayload();
        console.log("this.selectedProductObject : ", this.selectedProductObject);
        //this.ordersService.createOrders(this.orderPayload, this.selectedProductObject);
        this.ordersService.createOrdersNew(this.orderPayload, this.selectedProductObject)
            .then(function (data) {
            var confirmationMessage = confirm("You have successfully placed order... Click OK to navigate to Home page. Cancel to add more products.");
            if (confirmationMessage) {
                _this.router.navigate(['/']);
            }
        })
            .catch(function (err) {
            alert("OOPS... Something went wrong... Please try again..");
        });
    };
    CreateOrderComponent.prototype.updateStatus = function (order) {
        var _this = this;
        //let allOrderDetailsUpdates = [];
        this.allOrdersForUser = [];
        this.ordersService.updateOrderStatus(order._id).subscribe(function (updatedOrders) {
            _this.allOrdersForUser = [];
            Object.keys(updatedOrders).map(function (key) {
                _this.allOrdersForUser.push(updatedOrders[key]);
            });
        });
    };
    CreateOrderComponent.prototype.navigateToHomepage = function () {
        this.router.navigate(['/']);
    };
    CreateOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.component.html */ "./src/app/components/create-order/create-order.component.html"),
            styles: [__webpack_require__(/*! ./create-order.component.css */ "./src/app/components/create-order/create-order.component.css")]
        }),
        __metadata("design:paramtypes", [_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateOrderComponent);
    return CreateOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/failure-page/failure-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/failure-page/failure-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/failure-page/failure-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/failure-page/failure-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  failure-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/failure-page/failure-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/failure-page/failure-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: FailurePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailurePageComponent", function() { return FailurePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FailurePageComponent = /** @class */ (function () {
    function FailurePageComponent() {
    }
    FailurePageComponent.prototype.ngOnInit = function () {
    };
    FailurePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-failure-page',
            template: __webpack_require__(/*! ./failure-page.component.html */ "./src/app/components/failure-page/failure-page.component.html"),
            styles: [__webpack_require__(/*! ./failure-page.component.css */ "./src/app/components/failure-page/failure-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FailurePageComponent);
    return FailurePageComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Page under construction or out of scope !!!</p>"

/***/ }),

/***/ "./src/app/components/not-found-page/not-found-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/not-found-page/not-found-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/components/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/components/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/components/orders-display/orders-display.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/orders-display/orders-display.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, tr, th, td {\r\n    border: 2px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n form { \r\n    width: 30%;\r\n    padding: 2px;\r\n}"

/***/ }),

/***/ "./src/app/components/orders-display/orders-display.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/orders-display/orders-display.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table class=\"prediction-table\">\r\n    <tr>\r\n      <td>Product ID</td>\r\n      <td>Product Name</td>\r\n      <td>Quantity</td>\r\n      <td>Status</td>\r\n    </tr>\r\n    <tr *ngFor=\"let order of allOrderDetails\">\r\n      <td>{{order.productid}}</td>\r\n      <td>{{order.productname}}</td>\r\n      <td>{{order.quantity}}</td>\r\n      <td *ngIf=\"order.status===false\"><button  class=\"btn btn-primary\" (click)=\"updateStatus(order)\">In Progress</button></td>\r\n      <td *ngIf=\"order.status===true\"><button  class=\"btn btn-success\" disabled>Completed</button></td>\r\n      <!-- <td>{{order.status}}</td> -->\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/orders-display/orders-display.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/orders-display/orders-display.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrdersDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDisplayComponent", function() { return OrdersDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/orders.service */ "./src/app/services/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersDisplayComponent = /** @class */ (function () {
    function OrdersDisplayComponent(orderService) {
        this.orderService = orderService;
        this.allOrderDetails = [];
    }
    OrdersDisplayComponent.prototype.ngOnInit = function () {
        // this.orderService.getAllOrders().subscribe(orders => {
        //   Object.keys(orders).map(key => {
        //     this.allOrderDetails.push(orders[key]);
        //   });
        // })
        setInterval(this.getAllOrders(), 10000);
    };
    OrdersDisplayComponent.prototype.getAllOrders = function () {
        var _this = this;
        this.orderService.getAllOrders().subscribe(function (orders) {
            Object.keys(orders).map(function (key) {
                _this.allOrderDetails.push(orders[key]);
            });
        });
    };
    OrdersDisplayComponent.prototype.updateStatus = function (order) {
        var _this = this;
        var allOrderDetailsUpdates = [];
        this.allOrderDetails = [];
        this.orderService.updateOrderStatus(order._id).subscribe(function (updatedOrders) {
            _this.allOrderDetails = [];
            Object.keys(updatedOrders).map(function (key) {
                _this.allOrderDetails.push(updatedOrders[key]);
            });
        });
    };
    OrdersDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-display',
            template: __webpack_require__(/*! ./orders-display.component.html */ "./src/app/components/orders-display/orders-display.component.html"),
            styles: [__webpack_require__(/*! ./orders-display.component.css */ "./src/app/components/orders-display/orders-display.component.css")]
        }),
        __metadata("design:paramtypes", [_services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], OrdersDisplayComponent);
    return OrdersDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/predictions/predictions.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/predictions/predictions.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, tr, th, td {\r\n    border: 2px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n form { \r\n     width: 40%;\r\n     padding: 40px;\r\n }\r\n\r\n option {\r\n     width : 250px;\r\n }\r\n\r\n select {\r\n    width : 230px;\r\n }\r\n\r\n label {\r\n     font-size : 18px;\r\n }"

/***/ }),

/***/ "./src/app/components/predictions/predictions.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/predictions/predictions.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-8\">\r\n      <form>\r\n          <u><h1>Place new Order</h1></u> <br>\r\n          <div class=\"form-group\"> \r\n            <label for=\"productName\">Select Product: </label> <br>\r\n            <select name=\"selectedProductObject\" id=\"selectedProductObject\" [(ngModel)]=\"selectedProductObject\">\r\n                <option value=\"0\">-- Select --</option>\r\n                <option *ngFor=\"let product of allProducts\" value={{product.prediction[0]._id}} >\r\n                    {{product.productname}}\r\n                </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"predictedQuantity\">Predicted Quantity</label><br>\r\n            <input type=\"text\" class=\"form-control\" id=\"predictedQuantity\" name=\"predictedQuantity\" [(ngModel)]=\"predictedQuantity\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" clas=\"btn btn-success\" (click)=\"sendPrediction()\">Send Prediction</button>\r\n          </div>\r\n          </form>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n      <div>\r\n          <button class=\"btn btn-primary\" (click)=\"navigateToHomepage()\">Home Page</button>\r\n        </div>\r\n  </div>\r\n</div>\r\n\r\n \r\n  "

/***/ }),

/***/ "./src/app/components/predictions/predictions.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/predictions/predictions.component.ts ***!
  \*****************************************************************/
/*! exports provided: PredictionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsComponent", function() { return PredictionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_predictions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/predictions.service */ "./src/app/services/predictions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PredictionsComponent = /** @class */ (function () {
    function PredictionsComponent(predictionsService, router) {
        var _this = this;
        this.predictionsService = predictionsService;
        this.router = router;
        this.productID = [];
        this.productName = [];
        this.productObjectID = [];
        this.predictionPayload = {
            prediction: {
                predictedquantity: 0
            }
        };
        this.predictionsService.subscribeProducts().subscribe(function (data) {
            if (data.length > 0) {
                _this.allProducts = data;
            }
        });
    }
    PredictionsComponent.prototype.ngOnInit = function () {
    };
    PredictionsComponent.prototype.filterProducts = function (selectedProductName) {
        this.selectedProductName = selectedProductName;
    };
    PredictionsComponent.prototype.preparePayload = function () {
        var _this = this;
        this.selectedProduct = this.allProducts.filter(function (data) {
            return _this.selectedProductName === data.productname;
        });
        this.predictionPayload = {
            prediction: {
                predictedquantity: this.predictedQuantity
            }
        };
    };
    PredictionsComponent.prototype.sendPrediction = function () {
        var _this = this;
        this.preparePayload();
        this.predictionsService.sendPredictionPromise(this.predictionPayload, this.selectedProductObject)
            .then(function (data) {
            var confirmationMessage = confirm("You have successfully added new new prediction.. Click OK to navigate to Home page. Cancel to add more products.");
            if (confirmationMessage) {
                _this.router.navigate(['/']);
            }
        })
            .catch(function (err) {
            alert("OOPS... Something went wrong... Please try again..");
        });
    };
    PredictionsComponent.prototype.navigateToHomepage = function () {
        this.router.navigate(['/']);
    };
    PredictionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predictions',
            template: __webpack_require__(/*! ./predictions.component.html */ "./src/app/components/predictions/predictions.component.html"),
            styles: [__webpack_require__(/*! ./predictions.component.css */ "./src/app/components/predictions/predictions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_predictions_service__WEBPACK_IMPORTED_MODULE_1__["PredictionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PredictionsComponent);
    return PredictionsComponent;
}());



/***/ }),

/***/ "./src/app/components/show-all-prediction-data/show-all-prediction-data.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/show-all-prediction-data/show-all-prediction-data.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, tr, th, td {\r\n    border: 2px solid black;\r\n    padding: 2px;\r\n    text-align: center;\r\n }\r\n\r\n/* .predicted-table {\r\n    color: red;\r\n    border : 10px;\r\n} */"

/***/ }),

/***/ "./src/app/components/show-all-prediction-data/show-all-prediction-data.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/show-all-prediction-data/show-all-prediction-data.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table class=\"prediction-table\">\r\n    <tr>\r\n      <td>Product ID</td>\r\n      <td>Product Name</td>\r\n      <td>Predicted quantity</td>\r\n    </tr>\r\n    <tr *ngFor=\"let product of allPredictionDetails\">\r\n      <td>{{product.productid}}</td>\r\n      <td>{{product.productname}}</td>\r\n      <td>{{product.predictedquantity}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<br>\r\n<div>\r\n  <button (click)=\"navigateToAllOrders()\">Go to All Orders</button> &nbsp;\r\n  <button (click)=\"NavigateToCreatePrediction()\">Create Prediction</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/show-all-prediction-data/show-all-prediction-data.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/show-all-prediction-data/show-all-prediction-data.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ShowAllPredictionDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllPredictionDataComponent", function() { return ShowAllPredictionDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_predictions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/predictions.service */ "./src/app/services/predictions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowAllPredictionDataComponent = /** @class */ (function () {
    //public dataForTable: Observable<any>;
    //public allProductId: any = [];
    //public allProductName: any = [];
    //public allPredictedQuantity: any = [];
    //public allTimestamp: any = [];
    function ShowAllPredictionDataComponent(predictionsService, router) {
        this.predictionsService = predictionsService;
        this.router = router;
        //public allPredictedData:any = [];
        this.allPredictionDetails = [];
        this.displayedColumns = ['productid', 'productname', 'predictedquantity'];
    }
    ShowAllPredictionDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.predictionsService.getAllPredictionsForTable().subscribe(function (data) {
            Object.keys(data).map(function (key) {
                _this.allPredictionDetails.push(data[key]);
            });
        });
    };
    ShowAllPredictionDataComponent.prototype.navigateToAllOrders = function () {
        this.router.navigate(['/orders']);
    };
    ShowAllPredictionDataComponent.prototype.NavigateToCreatePrediction = function () {
        this.router.navigate(['/predictions']);
    };
    ShowAllPredictionDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-all-prediction-data',
            template: __webpack_require__(/*! ./show-all-prediction-data.component.html */ "./src/app/components/show-all-prediction-data/show-all-prediction-data.component.html"),
            styles: [__webpack_require__(/*! ./show-all-prediction-data.component.css */ "./src/app/components/show-all-prediction-data/show-all-prediction-data.component.css")]
        }),
        __metadata("design:paramtypes", [_services_predictions_service__WEBPACK_IMPORTED_MODULE_1__["PredictionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShowAllPredictionDataComponent);
    return ShowAllPredictionDataComponent;
}());



/***/ }),

/***/ "./src/app/components/success-page/success-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/success-page/success-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/success-page/success-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/success-page/success-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  success-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/success-page/success-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/success-page/success-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: SuccessPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageComponent", function() { return SuccessPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessPageComponent = /** @class */ (function () {
    function SuccessPageComponent() {
    }
    SuccessPageComponent.prototype.ngOnInit = function () {
    };
    SuccessPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success-page',
            template: __webpack_require__(/*! ./success-page.component.html */ "./src/app/components/success-page/success-page.component.html"),
            styles: [__webpack_require__(/*! ./success-page.component.css */ "./src/app/components/success-page/success-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessPageComponent);
    return SuccessPageComponent;
}());



/***/ }),

/***/ "./src/app/services/add-new-product.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/add-new-product.service.ts ***!
  \*****************************************************/
/*! exports provided: AddNewProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewProductService", function() { return AddNewProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-requests.service */ "./src/app/services/http-requests.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNewProductService = /** @class */ (function () {
    function AddNewProductService(httpRequestsService) {
        this.httpRequestsService = httpRequestsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE.faasos_api;
        this.allData = [];
    }
    AddNewProductService.prototype.addNewProductPromise = function (payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpRequestsService.postAPI(_this.apiUrl + 'addnewproduct', payload)
                .finally(function () {
                return resolve(_this.allData);
            })
                .subscribe(function (data) { return _this.allData = data; }, function (err) { if (err) {
                return reject(err);
            } });
        });
    };
    AddNewProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"]])
    ], AddNewProductService);
    return AddNewProductService;
}());



/***/ }),

/***/ "./src/app/services/all-details.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/all-details.service.ts ***!
  \*************************************************/
/*! exports provided: AllDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllDetailsService", function() { return AllDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-requests.service */ "./src/app/services/http-requests.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllDetailsService = /** @class */ (function () {
    function AllDetailsService(httpRequestsService) {
        this.httpRequestsService = httpRequestsService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_BASE.faasos_api;
    }
    AllDetailsService.prototype.getAllData = function () {
        return this.httpRequestsService.getAPI(this.apiUrl + 'alldata');
    };
    AllDetailsService.prototype.updateOrderStatus = function (orderId) {
        return this.httpRequestsService.patchAPI(this.apiUrl + 'updatestatus/' + orderId);
    };
    AllDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"]])
    ], AllDetailsService);
    return AllDetailsService;
}());



/***/ }),

/***/ "./src/app/services/http-requests.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/http-requests.service.ts ***!
  \***************************************************/
/*! exports provided: HttpRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestsService", function() { return HttpRequestsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpRequestsService = /** @class */ (function () {
    function HttpRequestsService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpRequestsService.prototype.getAPI = function (url, params) {
        return this.httpClient.get(url);
    };
    HttpRequestsService.prototype.postAPI = function (url, payload) {
        return this.httpClient.post(url, payload);
        // this.httpClient.post(url, payload)
        //   .map(res => res)
        //   .finally(() => console.log("finally called"))
        //   .subscribe(data => {
        //   })
        //   })
        // )
    };
    HttpRequestsService.prototype.patchAPI = function (url, payload, queryparams) {
        //if(queryparams){
        //this.createParamString(queryparams)
        console.log("this.mangleUrl(url, queryparams) : ", this.mangleUrl(url, queryparams));
        if (queryparams) {
            return this.httpClient.patch(this.mangleUrl(url, queryparams), payload);
        }
        else {
            return this.httpClient.patch(url, payload);
        }
        //}
        //this.mangleUrl(url, params)
        //return this.httpClient.patch(url, payload);
    };
    HttpRequestsService.prototype.createParamString = function (queryParams) {
    };
    HttpRequestsService.prototype.mangleUrl = function (url, params) {
        var updatedUrl = this.appendParams(url, params);
        return updatedUrl;
    };
    HttpRequestsService.prototype.appendParams = function (url, params) {
        if (params === void 0) { params = {}; }
        console.log("params from append", params);
        var qsEncoded = Object.keys(params).map(function (p) { return p + "=" + params[p]; }).join('&');
        return url + "?" + qsEncoded;
    };
    HttpRequestsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpRequestsService);
    return HttpRequestsService;
}());



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-requests.service */ "./src/app/services/http-requests.service.ts");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersService = /** @class */ (function () {
    function OrdersService(httpRequestsService, router) {
        this.httpRequestsService = httpRequestsService;
        this.router = router;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE.faasos_api;
        this._orders = {};
        this._updatedOrderStatus = {};
        this._products = {};
        this._placedOrders = {};
        this._allOrders = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](__assign({}, this._orders));
        this._allUpdatedOrderStatus = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](__assign({}, this._updatedOrderStatus));
        this._allProducts = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](__assign({}, this._products));
        this._allPlacedOrders = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](__assign({}, this._placedOrders));
        this.createNewOrdersArray = [];
    }
    OrdersService.prototype.getAllProductsList = function () {
        var _this = this;
        this.httpRequestsService.getAPI(this.apiUrl + '/alldata')
            .subscribe(function (data) {
            _this._products = data;
            _this._allProducts.next(data);
        });
    };
    OrdersService.prototype.subscribeAllProducts = function () {
        this.getAllProductsList();
        return this._allProducts.asObservable();
    };
    OrdersService.prototype.createOrders = function (payload, product_id) {
        var _this = this;
        this.httpRequestsService.patchAPI(this.apiUrl + 'placeorder/' + product_id, payload).subscribe(function (data) {
            _this._allPlacedOrders.next(data);
        });
        return this._allPlacedOrders.asObservable();
    };
    OrdersService.prototype.createOrdersNew = function (payload, product_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpRequestsService.patchAPI(_this.apiUrl + 'placeorder/' + product_id, payload)
                .finally(function () {
                return resolve(_this.createNewOrdersArray);
            })
                .subscribe(function (data) { return _this.createNewOrdersArray = data; }, function (err) { if (err) {
                return reject(err);
            } });
        });
    };
    OrdersService.prototype.getAllOrders = function () {
        var _this = this;
        this.httpRequestsService.getAPI(this.apiUrl + 'allorders')
            .subscribe(function (data) {
            _this._orders = data;
            _this._allOrders.next(data);
        });
        return this._allOrders.asObservable();
    };
    OrdersService.prototype.subscribeAllOrders = function () {
        return this._allOrders.asObservable();
    };
    OrdersService.prototype.updateOrderStatus = function (id) {
        return this.httpRequestsService.patchAPI(this.apiUrl + 'order/' + id, { "status": true });
    };
    OrdersService.prototype.getAllData = function () {
        return this.httpRequestsService.getAPI(this.apiUrl + 'alldata');
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/services/predictions.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/predictions.service.ts ***!
  \*************************************************/
/*! exports provided: PredictionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsService", function() { return PredictionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-requests.service */ "./src/app/services/http-requests.service.ts");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PredictionsService = /** @class */ (function () {
    function PredictionsService(httpRequestsService, router) {
        this.httpRequestsService = httpRequestsService;
        this.router = router;
        this._products = {};
        this._predictions = {};
        this._entries = {};
        // {
        //   "productid":null,
        //   "productname":null,
        //   "predictedquantity":null,
        //   "timestamp":null
        // };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_BASE.faasos_api;
        this._allProducts = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](__assign({}, this._products));
        this._allPredictions = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](__assign({}, this._predictions));
        this._allEntries = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](__assign({}, this._entries));
        this.predictionDataArray = [];
    }
    PredictionsService.prototype.getAllProducts = function () {
        var _this = this;
        this.httpRequestsService.getAPI(this.apiUrl + '/alldata')
            .subscribe(function (data) {
            _this._products = data;
            _this._allProducts.next(data);
        });
    };
    PredictionsService.prototype.subscribeProducts = function () {
        this.getAllProducts();
        return this._allProducts.asObservable();
    };
    PredictionsService.prototype.sendPrediction = function (payload, objectid) {
        var _this = this;
        this.httpRequestsService.patchAPI(this.apiUrl + 'createprediction/' + objectid, payload).subscribe(function (data) {
            _this._allPredictions.next(data);
            // if (data) {
            //   this.router.navigate(['/allPredictions']);
            // }
        });
    };
    PredictionsService.prototype.sendPredictionPromise = function (payload, objectid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpRequestsService.patchAPI(_this.apiUrl + 'createprediction/' + objectid, payload)
                .finally(function () {
                return resolve(_this.predictionDataArray);
            })
                .subscribe(function (data) { return _this.predictionDataArray = data; }, function (err) { if (err) {
                return reject(err);
            } });
        });
    };
    PredictionsService.prototype.subscribeAllPredictedData = function () {
        return this._allPredictions.asObservable();
    };
    PredictionsService.prototype.getAllPredictionsForTable = function () {
        var _this = this;
        this.httpRequestsService.getAPI(this.apiUrl + 'alldata').subscribe(function (data) {
            if (data) {
                _this._allEntries.next(data);
            }
        });
        return this._allEntries.asObservable();
    };
    PredictionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PredictionsService);
    return PredictionsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_BASE: {
        faasos_api: 'https://glacial-castle-43349.herokuapp.com/api/faasos/'
    }
};
/*faasos_api : 'http://localhost:8080/api/faasos/'
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\prashit.prakhar\Desktop\Faasos-API\Faasos-API\faasos-spa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map