import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { SorterService } from 'src/app/core/sorter.service';

import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    private _customers: ICustomer[] = [];
    @Input() get customers(): ICustomer[] {
        return this._customers;
    }

    set customers(value: ICustomer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    filteredCustomers: any[] = [];
    customersOrderTotal: number | any;
   // ICustomerOrderTotal: number;
    // я закоментировала эти 2 строки в 13 уроке
    currencyCode: string = 'USD';
    
    constructor(private sorterService: SorterService) {}
    
    ngOnInit() {
        this.filteredCustomers = [
            { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
            { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
            { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
        ];
    }

    ngOnChanges(changes: SimpleChanges): void {

    }

    calculateOrders(): void {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
        });
    }

     filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.toString().indexOf(data) > -1;
            });
           
        } else {
            this.filteredCustomers = this.customers;
         }
          this.calculateOrders();
    }
    
    sort(prop: string) {
    // A sorter service will handle the sorting
        this.sorterService.sort(this.filteredCustomers, prop);
}
}