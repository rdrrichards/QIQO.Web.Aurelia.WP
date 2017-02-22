import { AccountService } from '../services/account.service';
import { inject } from 'aurelia-framework';

@inject(AccountService)
export class AccountRecent{
    constructor(accountService){
        this.pageTitle = "Accounts with recent activity"
        this._accountService = accountService;
    }
    
    activate(){
        this.accounts = [];
        this.pattern = "";
    }
    
    find(){
        console.log('About to run the recent account function');
        this._accountService.getRecentAccounts()
            .then(accounts => this.accounts = accounts);
    }
}