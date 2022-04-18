import { Component, OnInit } from '@angular/core';
interface Personaje{
  nombre:string;
  poder:number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes:Array<Personaje> =[
    {nombre:'Goku',poder:65645},
    {nombre:'vegeta',poder:65645},
  ];
  nuevo:Personaje ={
    nombre: '',
    poder:0
  }
  agregar(){
    if (this.nuevo.nombre.trim().length===0) {
      return;
    }
    this.personajes.push(this.nuevo);
    console.log(this.nuevo);
    this.nuevo={nombre: '',
    poder:0};
    console.log(this.nuevo);
    
  }

}
