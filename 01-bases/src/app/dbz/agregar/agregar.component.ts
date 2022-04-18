import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input() personajesHijo:Personaje[]=[];

  @Input() nuevo:Personaje ={
    nombre: '',
    poder:0
  }
  constructor(private dbzService:DbzService){

  }

  agregar(){
    if (this.nuevo.nombre.trim().length===0) {
      return;
    }
    //DE HIJO A PADRE
    this.dbzService.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);
    this.nuevo={nombre: '',
    poder:0};
    
    
  }
}
