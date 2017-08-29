import { HttpClient } from 'aurelia-http-client';
//import { HttpClient as HttpFetch, json } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { CONFIG } from '../shared/config';

let _accountsUrl = CONFIG.baseUrls.accounts;

@inject(HttpClient)
export class AccountService {
  constructor(httpClient, httpFetch) {
    this._httpClient = httpClient;
    //this._httpFetch = httpFetch; 
  }

  findAccount(pattern) {
    var promise = new Promise((resolve, reject) => {
      this._httpClient.get(_accountsUrl + '&q=' + pattern)
        .then(result => {
          var data = JSON.parse(result.response);
          this.accounts = data;
          resolve(this.accounts);
        });
    });
    return promise;
  }

  getAccount(id) {
    var promise = new Promise((resolve, reject) => {
      this._httpClient.get(_accountsUrl + '/' + id)
        .then(result => {
          var data = JSON.parse(result.response);
          this.account = data;
          resolve(this.account);
        });
    });
    return promise;
  }

  updateAccount(account) {
    var promise = new Promise((resolve, reject) => {
      this._httpClient.configure(x => {
        x.withHeader('Content-Type', 'application/json');
        x.withHeader('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
      });
      this._httpClient.post(_accountsUrl, json(account))
        .then(response => response.json())
        .then(data => {
          //this.jobs.push(data);
          resolve(data);
        }).catch(err => reject(err));
    });
    return promise;
  }

  deleteAccount(id) {
    var promise = new Promise((resolve, reject) => {
      this._httpClient.delete(_accountsUrl + '/' + id)
        .then(result => {
          var data = JSON.parse(result.response);
          this.account = data;
          resolve(this.account);
        });
    });
    return promise;
  }

  getRecentAccounts() {
    var promise = new Promise((resolve, reject) => {
      this._httpClient.get(_accountsUrl + '/recent')
        .then(result => {
          var data = JSON.parse(result.response);
          this.accounts = data;
          resolve(this.accounts);
        });
    });
    return promise;
  }
}
