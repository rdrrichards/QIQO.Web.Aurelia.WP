export class Shell {
    constructor(){
        this.message = "Cheesecake sucks!!";
    }
    
    configureRouter(config, router) {
		this.router = router;
		config.title = "The Cheesecake Fool";
		//config.name = "Application Routes";
		//config.addPipelineStep('modelbind', ToastNavResult);
		//config.options.pushState = true;

		//**********************************************************************************************************
		// I had to remove the route names to keep from getting a distinct name error from the aurelia router(?!?!)
		// Maybe something to do with having more than one content presenter (router-view)?
		//**********************************************************************************************************

		config.map([
			{
				route: ['', 'openorders'], viewPorts: { 
					mainContent1: { moduleId: 'orders/open.orders' }, 
					mainContent2: { moduleId: 'invoices/open.invoices' } 
				},
				title: 'Open Orders', nav: true
			},
			{
				route: 'accounts', viewPorts: { 
					mainContent1: { moduleId: 'accounts/account.find' }, 
					mainContent2: { moduleId: 'accounts/account.recent' } 
				},
				title: 'Accounts', nav: true
			},
			{
				route: 'orders', viewPorts: { 
					mainContent1: { moduleId: 'orders/order.find' }, 
					mainContent2: { moduleId: 'orders/order.recent' } },
				title: 'Orders', nav: true
			},
			{
				route: 'invoices', viewPorts: { 
					mainContent1: { moduleId: 'invoices/invoice.find' }, 
					mainContent2: { moduleId: 'invoices/invoice.recent' } },
				title: 'Invoices', nav: true
			},
			{
				route: 'products', viewPorts: { 
					mainContent1: { moduleId: 'products/product.find' }, 
					mainContent2: { moduleId: 'products/product.recent' } },
				title: 'Products', nav: true
			},
			{ 
				route: 'orders/:id', viewPorts: { 
					mainContent1: {  moduleId: 'orders/order.view' }, 
					mainContent2: {moduleId: 'orders/order.recent' } 
				}
			},
			{
				route: 'products/:id', viewPorts: {
					mainContent1: { moduleId: 'products/product.view' },
					mainContent2: { moduleId: 'products/product.recent' }
				}
			},
			{
				route: 'products/edit/:id', viewPorts: {
					mainContent1: { moduleId: 'products/product.edit' },
					mainContent2: { moduleId: 'products/product.recent' }
				}
			},
			{
				route: 'accounts/:id', viewPorts: {
					mainContent1: { moduleId: 'accounts/account.view' },
					mainContent2: { moduleId: 'accounts/account.recent' }
				}
			}
		]);
	}
}


/*
export class Shell {
    constructor(){
        this.message = "Cheesecake sucks!!";
    }
    
    configureRouter(config, router) {
		this.router = router;
		config.title = "The Cheesecake Fool";
		//config.name = "Application Routes";
		//config.addPipelineStep('modelbind', ToastNavResult);
		//config.options.pushState = true;
		config.map([
			{
				route: ['', 'openorders'], viewPorts: { 
					mainContent1: { moduleId: 'orders/open.orders' }, 
					mainContent2: { moduleId: 'invoices/open.invoices' } 
				},
				name: 'OpenOrdersRoute', title: 'Open Orders', nav: true
			},
			{
				route: 'accounts', viewPorts: { 
					mainContent1: { moduleId: 'accounts/account.find' }, 
					mainContent2: { moduleId: 'accounts/account.recent' } 
				},
				name: 'AccountsRoute', title: 'Accounts', nav: true
			},
			{
				route: 'orders', name: 'OrdersRoute', viewPorts: { 
					mainContent1: { moduleId: 'orders/order.find' }, 
					mainContent2: { moduleId: 'orders/order.recent' } },
				title: 'Orders', nav: true
			},
			{
				route: 'invoices', name: 'InvoicesRoute', viewPorts: { 
					mainContent1: { moduleId: 'invoices/invoice.find' }, 
					mainContent2: { moduleId: 'invoices/invoice.recent' } },
				title: 'Invoices', nav: true
			},
			{
				route: 'products', viewPorts: { 
					mainContent1: { moduleId: 'products/product.find' }, 
					mainContent2: { moduleId: 'products/product.recent' } },
				title: 'Products', nav: true, name: 'ProductsRoute'
			},
			{ 
				route: 'orders/:id', viewPorts: { 
					mainContent1: {  moduleId: 'orders/order.view' }, 
					mainContent2: {moduleId: 'orders/order.recent' } }, 
					name: 'OrderViewRoute' },
			{
				route: 'products/:id', viewPorts: {
					mainContent1: { moduleId: 'products/product.view' },
					mainContent2: { moduleId: 'products/product.recent' }
				}, name: 'ProductViewRoute'
			},
			{
				route: 'products/edit/:id', viewPorts: {
					mainContent1: { moduleId: 'products/product.edit' },
					mainContent2: { moduleId: 'products/product.recent' }
				}, name: 'ProductEditRoute'
			},
			{
				route: 'accounts/:id', viewPorts: {
					mainContent1: { moduleId: 'accounts/account.view' },
					mainContent2: { moduleId: 'accounts/account.recent' }
				}, name: 'AccountViewRoute'
			}
		]);
	}
}
*/