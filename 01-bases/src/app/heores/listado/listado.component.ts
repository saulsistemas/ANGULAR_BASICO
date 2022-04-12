import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes:string[]=['Spiderman','Iroman','Hulk'];
  heroeBorrado:string="";
  
  borrar(){
    this.heroeBorrado=this.heroes.shift() || '';
    //console.log(heroeBorrado);
    
  }

}
