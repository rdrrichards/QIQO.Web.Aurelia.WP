import { AccountService } from '../services/account.service';
import { inject } from 'aurelia-framework';

@inject(AccountService)
export class AccountFind{
    constructor(accountService){
        this.pageTitle = "Find Account";
        this._accountService = accountService;
        this.pattern = "";
    }
    
    activate(){
        this.accounts = [];
    }
    
    find(){
        console.log('About to run the find account function with value passed in: ' + this.pattern);
        this._accountService.findAccount(this.pattern)
            .then(accounts => this.accounts = accounts);
    }
}