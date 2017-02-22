import { InvoiceService } from '../services/invoice.service';
import { inject } from 'aurelia-framework';

@inject(InvoiceService)
export class OpenInvoices{
    constructor(invoiceService){
        this.invoices = [];
        this._invoiceService = invoiceService;
        this.pageTitle = "Open Invoices"
    }
    
    activate(){
        this._invoiceService.getOpenInvoiceForCurrent()
            .then(invoices => this.invoices = invoices);
    }
}