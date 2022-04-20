import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paist.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino:string="";
  hayError:boolean = false;
  constructor(private _paisService:PaisService) { }

 buscar(){
   this.hayError = false;
   this._paisService.buscarPais(this.termino).subscribe((paises)=>{
     console.log(paises);
   },
   (err)=>{
     this.hayError = true;
     console.log(err);
   }
   )
   
 }

}
