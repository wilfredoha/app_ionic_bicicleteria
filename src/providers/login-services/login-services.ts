import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServicesProvider {

  headers: Headers;
  headerPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
  }

  public login(postParams){

    let body = 'email=' + postParams.email + '&password=' + postParams.password;

    this.headerPost = new Headers({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin':'*'
    })
    let optionspot = new RequestOptions({
      headers: this.headerPost
    })

    return new Promise ((resolve, reject) =>{
      this.http.post('https://api-rest-dantori-v-01.herokuapp.com/api/signin', body, optionspot)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }
}
