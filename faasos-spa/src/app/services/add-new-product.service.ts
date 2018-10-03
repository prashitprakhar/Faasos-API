import { Injectable } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {

  public apiUrl = environment.API_BASE.faasos_api;
  public allData = [];

  constructor(private httpRequestsService : HttpRequestsService) { }

  addNewProductPromise(payload) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpRequestsService.postAPI(this.apiUrl+'addnewproduct', payload)
        .finally(() => {
          return resolve(this.allData)
        })
        .subscribe(
          data => this.allData = data,
          err => {if(err) { return reject(err)}}
        )
    })
  }

  // addNewProduct(payload) {
  //   //return this.httpRequestsService.postAPI(this.apiUrl+'addnewproduct', payload);
    
  //   //this._createdProduct.next(this._product)
  //   //this.isFinallyCalled = false;
  //   this.httpRequestsService.postAPI(this.apiUrl+'addnewproduct', payload)
  //   //.map(res => res.json())
  //   .finally(() => {
  //     this._createdProduct.next(this.allData);
  //     this._isFinallyCalled = true;
  //     console.log("Finnallllllertly called")
  //   }
  // )
  //   //this._finallyStatus.next({isFinallyCalled : true});
  //   .subscribe(
  //     data =>  {this.allData = data},
  //     err =>  this.allData = err//this._createdProduct.next(err)
  //   )
    
  // }

  // subscribeToFinally() : Observable<any> {
  //   return this._finallyStatus.asObservable()
  // }

  // subscribeProducts(payload): Observable<any> {
  //   //this.isFinallyCalled = false;
  //   //this._createdProduct.next({})
  //   this.addNewProduct(payload);
  //   //this.createObservable()

  //   return this._createdProduct.asObservable();
  // }
  

  // createObservable() {
  //   let source = Rx.Observable.create(observer => {
  //     observer.onNext(42);
  //     observer.onCompleted();

  //     return () => console.log('disposed')
  //   })

  //   let subscription = source.subscribe(
  //     x => console.log('onNext: %s', x),
  //     e => console.log('onError: %s', e),
  //     () => console.log('onCompleted'));

  //   subscription.dispose()
  // }
}
