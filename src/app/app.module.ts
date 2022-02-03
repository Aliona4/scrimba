import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from  './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { AppRoutingModule } from './shared/app-routing.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  imports:      [ BrowserModule, CoreModule, CustomersModule, OrdersModule, SharedModule, AppRoutingModule  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

/* import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
этот код был до. не выходило на экрпн сообщение hello world только header синий 
я вставила код из урока 8 */
