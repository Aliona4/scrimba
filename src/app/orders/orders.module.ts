import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
//import { CustomersRoutingModule } from '../customers/customers-routing.module';  
//import { CustomersComponent } from '../customers/customers.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, OrdersRoutingModule ],
    declarations: [ OrdersComponent ]
})
export class OrdersModule { }