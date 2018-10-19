import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductServicesProvider } from '../../providers/product-services/product-services';
import { NewProductPage } from '../new-product/new-product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  token: string;
  products: string[];
  categorias: string[];

  constructor(public navCtrl: NavController, private navParams: NavParams,
    public productServices: ProductServicesProvider) {
    this.token = navParams.get('token');
  }

  ngOnInit(){
    this.getProducts();
  }

  newProduct(){
    this.navCtrl.push(NewProductPage, {
      token: this.token,
      categ: this.productServices.getCategorias(this.token).then((ctgr)=>{
        let respuesta = JSON.parse(ctgr["_body"]);
        this.categorias = respuesta.categorias; 
      }).catch((err)=>{
        console.log(err);
      })
    });
  }

  getProducts(){
    this.productServices.getProduct(this.token).then((pdct)=>{
      let respuesta = JSON.parse(pdct["_body"]);
      this.products = respuesta.productos;
    }).catch((err)=>{
      console.log(err);
    })
  }

  deleteProduct(id){
    this.productServices.deleteProduct(this.token,id).then((pdct)=>{
      this.getProducts();
    }).catch((err)=>{
      console.log(err);
    })
  }
}