import { InvoiceService } from '../services/invoice.service';
import { inject } from 'aurelia-framework';

@inject(InvoiceService)
export class InvoiceView{
    constructor(invoiceService){
        this.pageTitle = "invoice Details";
        this._invoiceService = invoiceService;
    }
    
    activate(params, routeConfig){
        console.log('About to run the get invoice function for invoiceKey: ' + params.id);
        this._invoiceService.getInvoice(params.id)
            .then(invoice => this.invoice = invoice);
    }
}