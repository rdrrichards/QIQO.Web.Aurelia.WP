import { OrderService } from '../services/order.service';
import { inject } from 'aurelia-framework';

@inject(OrderService)
export class OrderView{
    constructor(orderService){
        this.pageTitle = "Order Details";
        this._orderService = orderService;
    }
    
    activate(params, routeConfig){
        console.log('About to run the get order function for orderKey: ' + params.id);
        this._orderService.getOrder(params.id)
            .then(order => this.order = order);
    }
}