import { ProductService } from '../services/product.service';
import { inject } from 'aurelia-framework';

@inject(ProductService)
export class ProductView{
    constructor(productService){
        this.pageTitle = "Product Details";
        this._productService = productService;
    }
    
    activate(params, routeConfig){
        this._productService.getProduct(params.id)
            .then(product => this.product = product);
    }
}