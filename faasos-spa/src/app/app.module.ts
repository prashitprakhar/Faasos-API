import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PredictionsComponent } from './components/predictions/predictions.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { FailurePageComponent } from './components/failure-page/failure-page.component';
import { OrdersDisplayComponent } from './components/orders-display/orders-display.component';
import { ShowAllPredictionDataComponent } from './components/show-all-prediction-data/show-all-prediction-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDetailsComponent,
    CreateOrderComponent,
    NotFoundPageComponent,
    PredictionsComponent,
    SuccessPageComponent,
    FailurePageComponent,
    OrdersDisplayComponent,
    ShowAllPredictionDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        component : AllDetailsComponent
      },
      {
        path : 'createorder',
        component : CreateOrderComponent
      },
      {
        path : 'orders',
        component : OrdersDisplayComponent
      },
      {
        path : 'predictions',
        component : PredictionsComponent
      },
      {
        path : 'allPredictions',
        component : ShowAllPredictionDataComponent
      },
      {
        path : 'ordersuccess',
        component : SuccessPageComponent
      },
      {
        path : 'orderfailure',
        component : FailurePageComponent
      },
      {
        path : '**',
        component : NotFoundPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
