import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';
import { MostrarPage } from '../mostrar/mostrar';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  carrito=CarritoPage;
  mostrar=MostrarPage;
  carrito_a=[];


  productos= [
    {
      id: 0,
      name: "Sofia Perez",
      resenas:[
        {
          username:'Charity Case',
          avatar:"..//assets/imgs/girl1.png",
          review: "Belleza divina, produce gases"

        }
      ],
      fecha: "10/12/18",
      avatar:"..//assets/imgs/avatar1.png",
      nombre_p: " Bicicleta Vintage",
      imagen: "..//assets/imgs/bici.jpg",
      precio: " $1,000 pesos",
      disponible: "Si"
      
    },
    {
      id: 1,

      name: "Sofia Perez",
      resenas:[
        {
          username:'Charity Case',
          avatar:"..//assets/imgs/girl1.png",
          review: "Belleza divina, produce gases"

        }
      ],
      fecha: "10/12/18",
      avatar:"..//assets/imgs/avatar1.png",
      nombre_p: "Pollitos de colores" ,
      imagen: "..//assets/imgs/pollito.jpg",
      precio: " $10 pesos",
      disponible: "Si"
    },

    {
      id: 2,
      name: "Sofia Perez",
      resenas:[
        {
          username:'Charity Case',
          avatar:"..//assets/imgs/girl1.png",
          review: "Belleza divina, produce gases"

        }
      ],
      fecha: "10/12/18",
      avatar:"..//assets/imgs/avatar1.png",
      nombre_p: " Happily ever after potion" ,
      imagen: " ..//assets/imgs/potion.jpg",
      precio: " $350 pesos",
      disponible: "Si"
    },
    {
      id: 3,
      name: "Sofia Perez",
      resenas:[
        {
          username:'Charity Case',
          avatar:"..//assets/imgs/girl1.png",
          review: "Belleza divina, produce gases",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "10/12/18",
      avatar:"..//assets/imgs/avatar1.png",
      nombre_p: " Dinosaurio Real" ,
      imagen: " ..//assets/imgs/dino.jpg",
      precio: " $950 pesos",
      disponible: "Si"
    },


  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  clickCarrito(){
    this.navCtrl.push(this.carrito, {carrito:this.carrito_a});

  }

  ClickMostrar(p){
    this.navCtrl.push(this.mostrar,{producto: p, carrito:this.carrito_a});
  }

}
