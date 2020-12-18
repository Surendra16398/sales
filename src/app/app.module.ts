import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClosingstockComponent } from './sales/closingstock/closingstock.component';
import { InvoiceComponent } from './sales/invoice/invoice.component';
import { StocktableComponent } from './sales/stocktable/stocktable.component';
import { OpenComponent } from './sales/open/open.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './sales/homepage/homepage.component';
import { StoreselectionComponent } from './sales/storeselection/storeselection.component';
import { PaymentComponent } from './sales/payment/payment.component';
import { AddsalesComponent } from './sales/addsales/addsales.component';


@NgModule({
  declarations: [
    AppComponent,
    ClosingstockComponent,
    InvoiceComponent,
    StocktableComponent,
    OpenComponent,
    HomepageComponent,
    StoreselectionComponent,
    PaymentComponent,
    AddsalesComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
