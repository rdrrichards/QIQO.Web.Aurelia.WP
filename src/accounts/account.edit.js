import { AccountService } from '../services/account.service';
import { inject } from 'aurelia-framework';

@inject(AccountService)
export class AccountEdit {
  constructor(accountService) {
    this.pageTitle = "Edit Account";
    this._accountService = accountService;
  }

  activate(params, routeConfig, navigationInstruction) {
    this.router = navigationInstruction.router;
    this._accountService.getAccount(params.id)
      .then((account) => { 
        this.account = account;
        this.editAccount = account;
      });
    // .then(account => this.account = account);
  }

  save() {
    this._accountService.updateAccount(this.editAccount)
      .then(account => this.router.navigateToRoute('accounts'));
  }

  delete() {
    this._accountService.deleteAccount(this.account.accountKey)
      .then(account => this.router.navigateToRoute('accounts'));
    // really just need to do a redirect here (on success)
  }
}
