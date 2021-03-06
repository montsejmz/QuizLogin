import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Storage} from '@ionic/storage'

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  usuario_n="";
  password_n="";
  usuarios=[];
  nombre="";
  tel="";

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage :Storage,public alertCtrl: AlertController ) {

    this.usuarios=this.navParams.get("usuarios");
    
  }


  clickAgregar(){

    if (this.usuario_n.length >0 && this.password_n.length>=8){

    
    this.usuarios.push({
      usuario:this.usuario_n,
      password:this.password_n,
      nombre:this.nombre,
      tel:this.tel

    })

    this.usuario_n="";
    this.password_n="";
    this.nombre="";
    this.tel="";

    this.navCtrl.pop();

    this.storage.set('datos', JSON.stringify(this.usuarios));
    }

    else{

      const alert3 = this.alertCtrl.create({
        title: 'Ingrese un usuario válido y una contraseña mayor a 8 caracteres',
        buttons:['OK']
      });
      alert3.present();

    }


    

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

}
