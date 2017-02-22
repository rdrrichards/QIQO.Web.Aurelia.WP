import { InvoiceService } from '../services/invoice.service';
import { inject } from 'aurelia-framework';

@inject(InvoiceService)
export class InvoiceRecent{
    constructor(invoiceService){
        this.pageTitle = "Invoices with recent activity";
        this._invoiceService = invoiceService;
    }
    
    activate(){
        console.log('About to run the recent invoice function');
        this._invoiceService.getRecentInvoices()
            .then(page => this.page = page);        
    }
}