import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import { Observable, interval } from './../../../../node_modules/rxjs';
import { Router } from '@angular/router';
//import 'rxjs/add/observable/interval';
//import 'rxjs/Rx'


interface OrdersPayload {
  order: {
    username: string,
    orderedamount: number
  }
}

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {


  public allProducts: any;
  public productID: any = [];
  public productName: any = [];

  public selectedProductName: string;
  public selectedProduct: any;
  public orderedQuantity: number;
  public username: string = '';
  public selectedProductObject: any;

  public orderPayload: OrdersPayload = {
    order: {
      username: '',
      orderedamount: -1
    }
  }

  public allOrdersForUser: any = [];
  public allOrderDetails: any = [];

  public sub: Observable<any>
  public successFlag: boolean;
  //private publicIp = require('public-ip');

  constructor(private ordersService: OrdersService, private router: Router) {
    this.ordersService.subscribeAllProducts().subscribe(data => {
      if (data.length > 0) {
        this.allProducts = data;
      }
    });
  }

  ngOnInit() {
    new Observable(observer => {
      setInterval(() => { this.getAllOrders() }, 1000)
    })
  }

  getAllOrders() {
    this.allOrdersForUser = []
    this.ordersService.getAllOrders().subscribe(orders => {
      this.allOrdersForUser = [];
      Object.keys(orders).map(key => {
        this.allOrdersForUser.push(orders[key]);
      });
    })
  }

  filterProducts(selectedProductName: any) {
    this.selectedProductName = selectedProductName;
  }

  preparePayload() {
    this.selectedProduct = this.allProducts.filter(data => {
      return this.selectedProductName === data.productname
    });
    this.orderPayload = {
      order: {
        username: this.username,
        orderedamount: this.orderedQuantity
      }
    }
  }

  createOrder() {
    this.preparePayload();
    this.allOrdersForUser = []
    this.preparePayload();
    console.log("this.selectedProductObject : ", this.selectedProductObject)
    //this.ordersService.createOrders(this.orderPayload, this.selectedProductObject);
    this.ordersService.createOrdersNew(this.orderPayload, this.selectedProductObject)
      .then((data) => {
        let confirmationMessage = confirm("You have successfully placed order... Click OK to navigate to Home page. Cancel to add more products.");
        if (confirmationMessage) {
          this.router.navigate(['/'])
        }
      })
      .catch(err => {
        alert("OOPS... Something went wrong... Please try again..");
      })
  }

  updateStatus(order) {
    //let allOrderDetailsUpdates = [];
    this.allOrdersForUser = []
    this.ordersService.updateOrderStatus(order._id).subscribe(updatedOrders => {
      this.allOrdersForUser = [];
      Object.keys(updatedOrders).map(key => {
        this.allOrdersForUser.push(updatedOrders[key]);
      });
    });
  }

  navigateToHomepage() {
    this.router.navigate(['/'])
  }

}
