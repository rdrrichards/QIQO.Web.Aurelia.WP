import { OrderService } from '../services/order.service';
import { inject } from 'aurelia-framework';

@inject(OrderService)
export class OrderFind{
    constructor(orderService){
        this.pageTitle = "Find Order";
        this._orderService = orderService;
    }
    
    activate(){
        this.orders = [];
    }
    
    find(){
        console.log('About to run the find order function with value passed in: ' + this.pattern);
        this._orderService.findOrder(this.pattern)
            .then(orders => this.orders = orders);
    }
}