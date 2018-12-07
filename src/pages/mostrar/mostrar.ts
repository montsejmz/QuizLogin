import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
  producto;
  carrito=[];
  inicio=InicioPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.producto =this.navParams.get('producto');
  this.carrito =this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarPage');
  }

  AgregarCarrito(){
    this.carrito.push(this.producto);

    this.navCtrl.pop();
  }

}
