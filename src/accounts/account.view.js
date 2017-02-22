import { AccountService } from '../services/account.service';
import { inject } from 'aurelia-framework';

@inject(AccountService)
export class AccountView{
    constructor(accountService){
        this.pageTitle = "Account Details";
        this._accountService = accountService;
    }
    
    activate(params, routeConfig){
        this._accountService.getAccount(params.id)
            .then(account => this.account = account);
        // this._accountService.getPeople()
        //     .then(starwars => this.starwars = starwars);
    }
}