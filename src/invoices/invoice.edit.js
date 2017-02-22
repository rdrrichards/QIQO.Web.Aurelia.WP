import { InvoiceService } from '../services/invoice.service';
import { inject } from 'aurelia-framework';

@inject(InvoiceService)
export class InvoiceEdit{
    constructor(invoiceService){
        this.pageTitle = "Edit Invoice";
        this._invoiceService = invoiceService;
    }
    
    activate(params, routeConfig, navigationInstruction){
		this.router = navigationInstruction.router;
        this._invoiceService.getInvoice(params.id)
            .then(invoice => this.invoice = invoice);
    }
    
    save(){
        this._invoiceService.updateInvoice(this.invoice)
            .then(invoice => this.router.navigateToRoute('invoices'));
    }
    
    delete(){
        this._invoiceService.deleteInvoice(this.invoice.invoiceKey)
            .then(invoice => this.router.navigateToRoute('invoices'));
            // really just need to do a redirect here (on success)
    }
}