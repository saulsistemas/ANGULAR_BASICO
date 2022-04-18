import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

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

}
