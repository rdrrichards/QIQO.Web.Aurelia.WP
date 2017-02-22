import { InvoiceService } from '../services/invoice.service';
import { inject } from 'aurelia-framework';

@inject(InvoiceService)
export class InvoiceFind{
    constructor(invoiceService){
        this.pageTitle = "Find Invoice";
        this._invoiceService = invoiceService;
        this.pattern = "";
    }
    
    activate(){
        this.invoices = [];
    }
    
    find(){
        console.log('About to run the find invoice function with value passed in: ' + this.pattern);
        this._invoiceService.findInvoice(this.pattern)
            .then(invoices => this.invoices = invoices);
    }
}