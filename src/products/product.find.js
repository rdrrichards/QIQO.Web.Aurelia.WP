import { ProductService } from '../services/product.service';
import { inject } from 'aurelia-framework';

@inject(ProductService)
export class ProductFind{
    constructor(productService){
        this.pageTitle = "Find Product";
        this._productService = productService;
    }
    
    find(){
        console.log('About to run the find product function with value: ' + this.pattern);
        this._productService.findProduct(this.pattern)
            .then(page => this.page = page);        
    }
}