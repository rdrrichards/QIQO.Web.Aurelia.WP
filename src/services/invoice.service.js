import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { CONFIG } from '../shared/config';

let _openInvoicesUrl = CONFIG.baseUrls.openinvoices;
let _invoicesUrl = CONFIG.baseUrls.invoices;

@inject(HttpClient)
export class InvoiceService{
    constructor(httpClient, apiRoot){
        this._httpClient = httpClient; 
    }
    
    getOpenInvoiceForCurrent() {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_openInvoicesUrl)
            .then(result => {
                var data = JSON.parse(result.response);
                this.invoices = data;
                resolve(this.invoices);
            });
		});
		return promise;
    }
    
    findInvoice(pattern) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_invoicesUrl + '&q=' + pattern)
            .then(result => {
                var data = JSON.parse(result.response);
                this.invoices = data;
                resolve(this.invoices);
            });
		});
		return promise;
    }
    
    getInvoice(id) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.get(_invoicesUrl + '/' + id)
            .then(result => {
                var data = JSON.parse(result.response);
                this.invoice = data;
                resolve(this.invoice);
            });
		});
		return promise;
    }
    
    updateInvoice(invoice)  {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.configure(x => {
                x.withHeader('Content-Type','application/json');
                x.withHeader('Authorization',`Bearer ${localStorage.getItem('id_token')}`);
            });
			this._httpClient.post(_invoicesUrl,json(invoice))
            .then(response => response.json())
			.then(data => {
				//this.jobs.push(data);
				resolve(data);
			}).catch(err=>reject(err));
		});
		return promise;
    }
    
    deleteInvoice(id) {
        var promise = new Promise((resolve, reject) => {
            this._httpClient.delete(_invoicesUrl + '/' + id)
            .then(result => {
                var data = JSON.parse(result.response);
                this.invoice = data;
                resolve(this.invoice);
            });
		});
		return promise;
    }
    
    getRecentInvoices() {
        return this.getOpenInvoiceForCurrent();
        // var promise = new Promise((resolve, reject) => {
        //     this._httpClient.get(_invoicesUrl + '/recent')
        //     .then(result => {
        //         var data = JSON.parse(result.response);
        //         this.invoices = data;
        //         resolve(this.invoices);
        //     });
		// });
		// return promise;
    }
}
