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
      disponible: "9"
    },
    {
      id: 3,
      name: "Villalobos",
      resenas:[
        {
          username:'LoboFeroz',
          avatar:"..//assets/imgs/boy1.png",
          review: "Muy real",
          fecha_r:"10/06/18"

        }
      ],
      fecha: "10/12/18",
      avatar:"..//assets/imgs/avatar1.png",
      nombre_p: " Dinosaurio Real" ,
      imagen: " ..//assets/imgs/dino.jpg",
      precio: " $950 pesos",
      disponible: "6"
    },
    {
      id: 4,
      name: "Alexa Arenas",
      resenas:[
        {
          username:'Fiona',
          avatar:"..//assets/imgs/girl1.png",
          review: "Belleza divina, produce gases",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "10/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: " Niño Gavin" ,
      imagen: " ..//assets/imgs/gavin.jpg",
      precio: " $1800 pesos",
      disponible: "1"
    },
    {
      id: 5,
      name: "Villalobos",
      resenas:[
        {
          username:'LoboFeroz',
          avatar:"..//assets/imgs/boy1.png",
          review: "Muy suavecito, muy recomendado para piel sensible",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "10/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: " Papel Higenico" ,
      imagen: " ..//assets/imgs/papel.jpg",
      precio: " $100 pesos",
      disponible: "40"
    },
    {
      id: 6,
      name: "Marifer",
      resenas:[
        {
          username:'Niña Rosita',
          avatar:"..//assets/imgs/girl1.png",
          review: "fluffy aff",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "10/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: " Unicornio" ,
      imagen: " ..//assets/imgs/unicornio.jpg",
      precio: " $500 pesos",
      disponible: "40"
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
