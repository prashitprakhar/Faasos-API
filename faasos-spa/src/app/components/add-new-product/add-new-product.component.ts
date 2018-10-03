import { Component, OnInit } from '@angular/core';
import { AddNewProductService } from './../../services/add-new-product.service';


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

  public newProductTemplate: NewProduct = {
    productid: 0,
    productname: '',
    prediction: [
      {
        predictedquantity: 0
      }
    ],
    orders: [
      {
        orderedamount: 0
      }
    ]
  }

  constructor(private addNewProductService : AddNewProductService) { }

  ngOnInit() {
  }

  addNewProduct() {
    this.newProductTemplate = {
      productid: this.productId,
      productname: this.productName,
      prediction: [
        {
          predictedquantity: 0
        }
      ],
      orders: [
        {
          orderedamount: 0
        }
      ]
    }

    this.addNewProductService.addNewProduct(this.newProductTemplate).subscribe(data => {
      console.log("Successfully create new product")
    })
    // .subscribe(data => {
    //   console.log("Data of new Product : ",data)
    // })

  }

  

}
