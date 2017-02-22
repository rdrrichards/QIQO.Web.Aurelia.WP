import { OrderService } from '../services/order.service';
import { inject } from 'aurelia-framework';

@inject(OrderService)
export class OrderRecent{
    constructor(orderService){
        this.pageTitle = "Orders with recent activity";
        this._orderService = orderService;
    }
    
    activate(){
        console.log('About to run the recent order function');
        this._orderService.getRecentOrders()
            .then(orders => this.orders = orders);        
    }
}