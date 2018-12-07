import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { AgregarPage } from '../agregar/agregar';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario_r="";
  password_r="";
  usuarios=[];
  add=AgregarPage;
  inicio = InicioPage;




  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage :Storage ) {

    this.storage.keys()
    .then (keys => {
      if (keys.some(key=> key =='datos')){
        this.storage.get ('datos')
        .then(usuarios => {
          this.usuarios = JSON.parse(usuarios)
        })
      }
    })

  }



  clickInicio(){

     if (this.usuario_r.length <=0){
      const alert2 = this.alertCtrl.create({
        title: 'Ingrese un usuario válido',
        buttons:['OK']
      });
      alert2.present();
     }
     else{
       
        let index =this.usuarios.findIndex(usuario => usuario.usuario == this.usuario_r && usuario.password == this.password_r)

        if (index >=0){

          this.navCtrl.push(this.inicio);

          const alert = this.alertCtrl.create({
            title: 'Bienvenido',
            buttons:['OK']
          });
          alert.present();
        }
        else{
          const alert = this.alertCtrl.create({
            title: 'Usuario no registrado',
            buttons:['OK']
          });
          alert.present();
        }

     }
   

  }

  clickAgregar(){

    /*this.usuarios.push({
      usuario:this.usuario_r,
      password:this.password_r
    })*/

    this.navCtrl.push(this.add, {usuarios: this.usuarios});
  }

}
