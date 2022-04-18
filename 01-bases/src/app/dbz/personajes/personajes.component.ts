import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

  //ESTE COMPONENTE ES HIJO
 // @Input() personajesHijo:Personaje[]=[];
 get personajesHijo(){
  return this.dbzService.personajes;
}

  constructor(private dbzService:DbzService){
  }
  
}
