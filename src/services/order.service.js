import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { CONFIG } from '../shared/config';

let _openOrdersUrl = CONFIG.baseUrls.openorders;
let _ordersUrl = CONFIG.baseUrls.orders;

@inject(HttpClient)
export class OrderService{
    constructor(httpClient, apiRoot){
        this._httpClient = httpClient; 
    }
    
    getOpenOrderForCurrent() {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_openOrdersUrl)
            .then(result => {
                var data = JSON.parse(result.response);
                this.orders = data;
                resolve(this.orders);
            });
		});
		return promise;
    }
    
    findOrder(pattern) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_ordersUrl + '&q=' + pattern)
            .then(result => {
                var data = JSON.parse(result.response);
                this.orders = data;
                resolve(this.orders);
            });
		});
		return promise;
    }
    
    getOrder(id) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_ordersUrl + '/' + id)
            .then(result => {
                var data = JSON.parse(result.response);
                this.order = data;
                resolve(this.order);
            });
		});
		return promise;
    }
    
    updateOrder(order)  {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.configure(x => {
                x.withHeader('Content-Type','application/json');
                x.withHeader('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
            });
			this._httpClient.post(_ordersUrl,json(order))
            //.then(response => response.json())
			.then(data => {
				//this.jobs.push(data);
				resolve(data);
			}).catch(err=>reject(err));
		});
		return promise;
    }
    
    deleteOrder(id) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.delete(_ordersUrl + '/' + id)
            .then(result => {
                var data = JSON.parse(result.response);
                this.order = data;
                resolve(this.order);
            });
		});
		return promise;
    }
    
    getRecentOrders() {
        return this.getOpenOrderForCurrent();
        // var promise = new Promise((resolve, reject) => {
        //     this._httpClient.get(_ordersUrl + '/recent')
        //     .then(result => {
        //         var data = JSON.parse(result.response);
        //         this.orders = data;
        //         resolve(this.orders);
        //     });
		// });
		// return promise;
    }
}
