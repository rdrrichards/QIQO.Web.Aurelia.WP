import { ProductService } from '../services/product.service';
import { inject } from 'aurelia-framework';

@inject(ProductService)
export class ProductEdit{
    constructor(productService){
        this.pageTitle = "Edit Product";
        this._productService = productService;
    }
    
    activate(params, routeConfig, navigationInstruction){
		this.router = navigationInstruction.router;
        this._productService.getProduct(params.id)
            .then(product => this.product = product);
    }
    
    save(){
        this._productService.updateProduct(this.product)
            .then(product => this.router.navigateToRoute('products'));
    }
    
    delete(){
        this._productService.deleteProduct(this.product.productKey)
            .then(product => this.router.navigateToRoute('products'));
            // really just need to do a redirect here (on success)
    }
}