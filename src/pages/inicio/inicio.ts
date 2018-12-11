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
      star: [1,2,3,4],
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
      star: [1,2,3,4],
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
      star: [1,2,3,4],
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
      star: [1,2,3,4],
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
      star: [1,2,3,4],
      name: "Alexa Arenas",
      resenas:[
        {
          username:'Fiona',
          avatar:"..//assets/imgs/girl1.png",
          review: "Niño obediente y gracioso",
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
      star: [1,2,3,4],
      name: "Villalobos",
      resenas:[
        {
          username:'Sebastian55',
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
      star: [1,2,3,4],
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
    {
      id: 7,
      star: [1,2,3,4],
      name: "Marifer",
      resenas:[
        {
          username:'Niña Rosita',
          avatar:"..//assets/imgs/girl1.png",
          review: "Hay de varios colores, pero el azul es el mas bonito",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "13/10/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: " Pez Betta" ,
      imagen: " ..//assets/imgs/pez.jpg",
      precio: " $30 pesos",
      disponible: "100"
    },
    {
      id: 8,
      star: [1,2,3,4],
      name: "Sofia Perez",
      resenas:[
        {
          username:'Montse',
          avatar:"..//assets/imgs/girl1.png",
          review: "Estan bien malos y se deshacen facilmente",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "13/10/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Mazapan de la Rosa" ,
      imagen: " ..//assets/imgs/mazapan.jpg",
      precio: " $5 pesos",
      disponible: "50"
    },

    {
      id: 9,
      star: [1,2,3,4],
      name: "Sofia Perez",
      resenas:[
        {
          username:'Estrellita',
          avatar:"..//assets/imgs/girl1.png",
          review: "Se ven bien padres y puedes hacer ejercicio con ellas",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "6/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Botella" ,
      imagen: " ..//assets/imgs/botellas.jpg",
      precio: " $75 pesos",
      disponible: "15"
    },

    {
      id: 10,
      star: [1,2,3,4],
      name: "Montserrat",
      resenas:[
        {
          username:'Charity case',
          avatar:"..//assets/imgs/girl1.png",
          review: "Super bonitos, pongan de mas colores!",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "6/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Popotes Metalicos" ,
      imagen: " ..//assets/imgs/popote.jpg",
      precio: " $45 pesos",
      disponible: "15 paquetes"
    },

    {
      id: 11,
      star: [1,2,3,4],
      name: "Marifer",
      resenas:[
        {
          username:'Charity case',
          avatar:"..//assets/imgs/girl1.png",
          review: "Pedi uno y me llego muerto :( ",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "6/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Cria de Elefante" ,
      imagen: " ..//assets/imgs/elefante.jpg",
      precio: " $120, 0000 pesos",
      disponible: "3 "
    },

    {
      id: 12,
      star: [1,2,3,4],
      name: "Villalobos",
      resenas:[
        {
          username:'Sofi23335',
          avatar:"..//assets/imgs/girl1.png",
          review: "Si es muy comodo, tal y como dice el comercial",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "6/12/18",
      avatar:"..//assets/imgs/boy1.png",
      nombre_p: "Squatty Potty" ,
      imagen: " ..//assets/imgs/potty.jpg",
      precio: " $300 pesos",
      disponible: "9 "
    },
    {
      id: 13,
      star: [1,2,3,4],
      name: "Marifer",
      resenas:[
        {
          username:'CatLoverMeow',
          avatar:"..//assets/imgs/girl2.png",
          review: "Llego muy suavecita, mi gato me rasguña si toco su sabana ",
          fecha_r:"15/11/18"

        }
      ],
      fecha: "6/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Sabana Purrito para Gatos" ,
      imagen: " ..//assets/imgs/purrito.jpg",
      precio: " $500 pesos",
      disponible: "30 "
    },

    {
      id: 14,
      star: [1,2,3,4],
      name: "Fernanda",
      resenas:[
        {
          username:'Santa',
          avatar:"..//assets/imgs/oldMan.png",
          review: "Me quedo pequeño pero la tela es de buena calidad hohoho ",
          fecha_r:"18/05/18"

        }
      ],
      fecha: "6/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Sueter Navideño" ,
      imagen: " ..//assets/imgs/sweater.jpg",
      precio: " $600 pesos",
      disponible: "40 "
    },

    {
      id: 15,
      star: [1,2,3,4],
      name: "Fernanda",
      resenas:[
        {
          username:'Grandpa',
          avatar:"..//assets/imgs/oldMan.png",
          review: "Muy creativa ",
          fecha_r:"10/05/18"

        }
      ],
      fecha: "6/12/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Taza" ,
      imagen: " ..//assets/imgs/taza.jpg",
      precio: " $80 pesos",
      disponible: "20 "
    },

    {
      id: 16,
      star: [1,2,3,4],
      name: "Sofia Perez",
      resenas:[
        {
          username:'Nany0001',
          avatar:"..//assets/imgs/girl1.png",
          review: "Me llego un android y no lo puedo cambiar ",
          fecha_r:"10/12/18"

        }
      ],
      fecha: "01/12/17",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Iphone Xs" ,
      imagen: " ..//assets/imgs/iphone.jpg",
      precio: " $30, 000 pesos",
      disponible: "20 "
    },

    
    {
      id: 17,
      star: [1,2,3,4],
      name: "Montserrat",
      resenas:[
        {
          username:'Charity Case0001',
          avatar:"..//assets/imgs/girl1.png",
          review: "Super lindo pero llego oliendo medio gacho ",
          fecha_r:"15/09/18"

        }
      ],
      fecha: "7/05/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Iphone Xs" ,
      imagen: " ..//assets/imgs/iphone.jpg",
      precio: " $30, 000 pesos",
      disponible: "20 "
    },

    {
      id: 18,
      star: [1,2,3,4],
      name: "Montserrat",
      resenas:[
        {
          username:'Charity Case0001',
          avatar:"..//assets/imgs/girl1.png",
          review: "Super lindo pero llego oliendo medio gacho ",
          fecha_r:"15/09/18"

        }
      ],
      fecha: "7/05/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Iphone Xs" ,
      imagen: " ..//assets/imgs/iphone.jpg",
      precio: " $30, 000 pesos",
      disponible: "20 "
    },

    {
      id: 19,
      star: [1,2,3,4],
      name: "Michelle",
      resenas:[
        {
          username:'Jauregui0001',
          avatar:"..//assets/imgs/boy1.png",
          review: "Super lindo pero llego oliendo medio gacho ",
          fecha_r:"15/09/18"

        }
      ],
      fecha: "7/05/18",
      avatar:"..//assets/imgs/girl1.png",
      nombre_p: "Iphone Xs" ,
      imagen: " ..//assets/imgs/iphone.jpg",
      precio: " $30, 000 pesos",
      disponible: "20 "
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
