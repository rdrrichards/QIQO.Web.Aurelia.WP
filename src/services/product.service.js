import { HttpClient } from 'aurelia-http-client';
//import { HttpClient as HttpFetch, json } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { CONFIG } from '../shared/config';

let _productsUrl = CONFIG.baseUrls.products;

@inject(HttpClient)
export class ProductService{
    constructor(httpClient, httpFetch){
        this._httpClient = httpClient; 
        //this._httpFetch = httpFetch; 
    }
    
    findProduct(pattern) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_productsUrl + '&q=' + pattern)
            .then(result => {
                var data = JSON.parse(result.response);
                this.products = data;
                resolve(this.products);
            });
		});
		return promise;
    }
    
    getProduct(id) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_productsUrl + '/' + id)
            .then(result => {
                var data = JSON.parse(result.response);
                this.product = data;
                resolve(this.product);
            });
		});
		return promise;
    }
    
    updateProduct(product)  {
        console.log('About to run the updateProduct function with value: ' + product.productName);
        var promise = new Promise((resolve, reject) => {
            this._httpClient.configure(x => {
                x.withHeader('Content-Type','application/json');
                x.withHeader('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
            });
			this._httpClient.post(_productsUrl, JSON.stringify(product))
            //.then(response => response.json())
			.then(data => {
				//this.jobs.push(data);
				resolve(data);
			}).catch(err=>reject(err));
		});
		return promise;
    }
    
    deleteProduct(id) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.delete(_productsUrl + '/' + id)
            .then(result => {
                var data = JSON.parse(result.response);
                this.product = data;
                resolve(this.product);
            });
		});
		return promise;
    }
    
    getRecentProducts() {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_productsUrl + '/recent')
            .then(result => {
                var data = JSON.parse(result.response);
                this.products = data;
                resolve(this.products);
            });
		});
		return promise;
    }
}