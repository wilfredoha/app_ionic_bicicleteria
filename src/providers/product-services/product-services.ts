import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductServicesProvider {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello ProductServicesProvider Provider');
  }

  public getProduct(token){
    this.headersPost = new Headers({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-origin':'*',
      'Authorization':'Bearer ' + token
    });

    let optionspot = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.get('https://api-rest-dantori-v-01.herokuapp.com/api/producto', optionspot)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }

  public newProduct(token, postParams){
    let body = 'nombre='+postParams.nombre+'&precio='+postParams.precio+'&descripcion='+postParams.descripcion+'&categoria='+postParams.categoria;

    this.headersPost = new Headers({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-origin':'*',
      'Authorization':'Bearer ' + token
    });

    let optionspot = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.post('https://api-rest-dantori-v-01.herokuapp.com/api/producto', body, optionspot)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }

  public deleteProduct(token, id){
    this.headersPost = new Headers({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-origin':'*',
      'Authorization':'Bearer ' + token
    });

    let optionspot = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.delete('https://api-rest-dantori-v-01.herokuapp.com/api/producto/'+id, optionspot)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }

  public getCategorias(token){
    this.headersPost = new Headers({
      'Content-Type':'application/x-www-form-urlencoded',
      'Access-Control-Allow-origin':'*',
      'Authorization':'Bearer ' + token
    });

    let optionspot = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.get('https://api-rest-dantori-v-01.herokuapp.com/api/categoria', optionspot)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }
}
