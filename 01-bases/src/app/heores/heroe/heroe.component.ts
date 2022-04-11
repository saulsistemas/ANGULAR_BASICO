import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {
  nombre:string = "iroma";
  edad:number = 28;
  
  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
 obtenerNombre():string{
    return  `${this.nombre} - ${this.edad}`
 }

  
  

}
