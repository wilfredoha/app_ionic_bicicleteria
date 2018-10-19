import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServicesProvider } from '../../providers/product-services/product-services';
import { HomePage } from '../home/home';
/**
 * Generated class for the NewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {

  token: string;
  nombre: string;
  precio: string;
  descripcion: string;
  categoria: string

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductServicesProvider) {
    this.token = navParams.get('token');
  }

  saveProducts(){
    let postParams = {
      nombre : this.nombre,
      precio : this.precio,
      descripcion : this.descripcion,
      categoria : this.categoria
    }
    this.productService.newProduct(this.token, postParams).then((pdct)=>{
      alert(pdct['statusText']);
      this.navCtrl.setRoot(HomePage, {
        token : this.token
      });
    }).catch((err)=>{
      console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewProductPage');
  }

}
