import { OrderService } from '../services/order.service';
import { inject } from 'aurelia-framework';

@inject(OrderService)
export class OpenOrders{
    constructor(orderService){
        this.orders = [];
        this._orderService = orderService;
        this.pageTitle = "Open Orders"
    }
    
    activate(){
        this._orderService.getOpenOrderForCurrent()
            .then(orders => this.orders = orders);
    }
}
