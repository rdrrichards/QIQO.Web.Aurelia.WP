import { ProductService } from '../services/product.service';
import { inject } from 'aurelia-framework';

@inject(ProductService)
export class ProductRecent{
    constructor(productService){
        this.pageTitle = "Products with recent activity";
        this._productService = productService;
    }
    
    activate(){
        console.log('About to run the recent product function');
        this._productService.getRecentProducts()
            .then(page => this.page = page);        
    }
}