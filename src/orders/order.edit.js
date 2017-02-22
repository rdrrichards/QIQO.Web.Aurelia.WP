import { OrderService } from '../services/order.service';
import { inject } from 'aurelia-framework';

@inject(OrderService)
export class OrderEdit{
    constructor(orderService){
        this.pageTitle = "Edit Order";
        this._orderService = orderService;
    }
    
    activate(params, routeConfig, navigationInstruction){
		this.router = navigationInstruction.router;
        this._orderService.getOrder(params.id)
            .then(order => this.order = order);
    }
    
    save(){
        this._orderService.updateOrder(this.order)
            .then(order => this.router.navigateToRoute('orders'));
    }
    
    delete(){
        this._orderService.deleteOrder(this.order.orderKey)
            .then(order => this.router.navigateToRoute('orders'));
            // really just need to do a redirect here (on success)
    }
}
