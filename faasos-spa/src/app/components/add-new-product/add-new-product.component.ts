import { Component, OnInit } from '@angular/core';
import { AddNewProductService } from './../../services/add-new-product.service';
import { Router } from '@angular/router';
import '../../../../node_modules/rxjs/add/operator/finally';


interface NewProduct {
  productid: number,
  productname: string,
  prediction: [
    {
      predictedquantity: number
    }
  ],
  orders: [
    {
      orderedamount: number
    }
  ]
}

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  public productName: string;
  public productId: number;
  public successMessage: string;
  public failureMessage: string;
  private isFinally: boolean = false;
  public subscribedData: any = [];

  public newProductTemplate: NewProduct = {
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
  }

  constructor(private addNewProductService: AddNewProductService,
    private router: Router) { }

  ngOnInit() {
  }

  addNewProduct() {
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
    }

    this.addNewProductService.addNewProductPromise(this.newProductTemplate).then(data => {
      let confirmationMessage = confirm("You have successfully added new item to the Menu... Click OK to navigate to Home page. Cancel to add more products.");
      if (confirmationMessage) {
        this.router.navigate(['/'])
      }
    }).catch(err => {
      alert("OOPS... Something went wrong... Please try again..");
    })
  }

  navigateToHomepage() {
    this.router.navigate(['/'])
  }



}
