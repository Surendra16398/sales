import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsalesComponent } from './sales/addsales/addsales.component';
import { ClosingstockComponent } from './sales/closingstock/closingstock.component';
import { HomepageComponent } from './sales/homepage/homepage.component';
import { InvoiceComponent } from './sales/invoice/invoice.component';
import { OpenComponent } from './sales/open/open.component';
import { PaymentComponent } from './sales/payment/payment.component';
import { StocktableComponent } from './sales/stocktable/stocktable.component';
import { StoreselectionComponent } from './sales/storeselection/storeselection.component';

const routes: Routes = [
  {
    path:"",redirectTo:"homepage",pathMatch:"full"
  },
  {
    path:"homepage",component:HomepageComponent
  },
  {
    path:"closingstock",component:ClosingstockComponent
  },
  {
    path:"invoice",component:InvoiceComponent
  },
  {
    path:"stocktable",component:StocktableComponent
  },
  {
    path:"open",component:OpenComponent
  },
  
  {
    path:"storeselection",component:StoreselectionComponent
  },
  {
    path:"payment",component:PaymentComponent
  },
  {
    path:"addsales",component:AddsalesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
}
