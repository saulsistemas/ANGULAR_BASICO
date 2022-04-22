import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paist.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent  {

  termino:string="";
  hayError:boolean = false;
  paises: Country[]=[];
  placeHolderPais:string="Buscar Por Pais ..";
  paisesSugeridos:Country[] =[];
  constructor(private _paisService:PaisService) { }

 buscar(termino_form:string){
   this.termino =termino_form
   this.hayError = false;
   this._paisService.buscarPais(this.termino).subscribe((paises)=>{
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
  this._paisService.buscarPais(termino)
      .subscribe((paises) =>this.paisesSugeridos= paises.splice(0,5),//SOLO QuiERO MOSTRAR LOS 5 QUE VIENEN POR EL ARREGLO
                  (error)=> this.paisesSugeridos=[]
      )
  console.log("sugere"+termino);
  
 }

}
