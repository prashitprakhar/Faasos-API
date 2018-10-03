import { Injectable } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {

  public apiUrl = environment.API_BASE.faasos_api;

  constructor(private httpRequestsService : HttpRequestsService) { }

  addNewProduct(payload) {
    return this.httpRequestsService.postAPI(this.apiUrl+'addnewproduct', payload);
  }
  
}
