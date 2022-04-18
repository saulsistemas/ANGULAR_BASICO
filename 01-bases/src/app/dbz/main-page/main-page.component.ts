import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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
    nombre: 'Maestro Roshi',
    poder:12313
  }

  agregarNuevoPersonaje(argumento:Personaje){
    // debugger
    console.log(argumento);
    this.personajes.push(argumento);
  }

  constructor(private dbzService:DbzService){
   
    
  }

}
