import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, DoCheck {
 
    public tipoBocadito: string; // 2.1 Creo una propiedad dentro de la class
  constructor() { 
    console.log("constructor lanzado");
    this.tipoBocadito = "dulce" // 2.2 Dentro del constructor le asigno un valor a la propiedad
  }

  ngOnInit(): void {
    console.log("componente iniciado")
  };

  ngDoCheck() {
    console.log("soy doCheck")
  };

  cambiarTipoBocadito() {  //2.3 método se crea dentro del constructor 
    this.tipoBocadito = "salado";
  }
}// FIN CONSTRUCTOR

/*NOTAS:
//CON LOS MÉTODOS DEBO:
// 1. Importarlo en la línea 1
// 2. Agregarlo a la class
*/



