import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paist.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {
  termino:string="";
  hayError:boolean = false;
  paises: Country[]=[];
  placeHolderCapital:string="Buscar Por Capital ..";
  constructor(private _paisService:PaisService) { }


  buscar(termino_form:string){
    this.termino =termino_form
    this.hayError = false;
    this._paisService.buscarCapital(this.termino)
      .subscribe((paises)=>{
        this.paises = paises;
        console.log(paises);
    },
    (err)=>{
      this.hayError = true;
      console.log(err);
      this.paises=[];
    }
    )
  }

  sugerencias(termino:string){
    this.hayError = false;
    console.log("sugere"+termino);
   }

}
