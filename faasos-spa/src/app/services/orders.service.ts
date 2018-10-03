import { Injectable } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from './../../environments/environment'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public apiUrl = environment.API_BASE.faasos_api;
  public _orders = {};
  public _updatedOrderStatus = {};
  public _products = {};
  public _placedOrders = {};

  public _allOrders = new BehaviorSubject<any>({ ...this._orders });
  public _allUpdatedOrderStatus = new BehaviorSubject<any>({ ...this._updatedOrderStatus });
  private _allProducts = new BehaviorSubject<any>({ ...this._products });
  private _allPlacedOrders = new BehaviorSubject<any>({ ...this._placedOrders });

  public createNewOrdersArray = [];

  constructor(private httpRequestsService: HttpRequestsService,
    private router: Router) { }

  getAllProductsList() {
    this.httpRequestsService.getAPI(this.apiUrl + '/alldata')
      .subscribe(data => {
        this._products = data;
        this._allProducts.next(data);
      })
  }

  subscribeAllProducts(): Observable<any> {
    this.getAllProductsList();
    return this._allProducts.asObservable();
  }

  createOrders(payload, product_id): Observable<any> {
    this.httpRequestsService.patchAPI(this.apiUrl + 'placeorder/' + product_id, payload).subscribe(data => {
      this._allPlacedOrders.next(data);
    });
    return this._allPlacedOrders.asObservable();
  }

  createOrdersNew(payload, product_id) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpRequestsService.patchAPI(this.apiUrl + 'placeorder/' + product_id, payload)
      .finally(() => {
        return resolve(this.createNewOrdersArray)
      })
      .subscribe(
          data => this.createNewOrdersArray = data,
          err => {if(err) { return reject(err)}}
      )
      })
  }

  getAllOrders() {
    this.httpRequestsService.getAPI(this.apiUrl + 'allorders')
      .subscribe(data => {
        this._orders = data;
        this._allOrders.next(data);
      });
    return this._allOrders.asObservable();
  }

  subscribeAllOrders() {
    return this._allOrders.asObservable();
  }

  updateOrderStatus(id: number) {
    return this.httpRequestsService.patchAPI(this.apiUrl + 'order/' + id, { "status": true })
  }

  getAllData() {
    return this.httpRequestsService.getAPI(this.apiUrl + 'alldata')
  }

}
