import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paist.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right:5px;
    }`
  ]
})
export class PorRegionComponent  {

  regiones:Array<string> =['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';
  paises:Array<Country> =[];
  constructor(private paisServe:PaisService) { }

  activarRegion(region:string ){
    if(region === this.regionActiva){return}
    this.regionActiva = region;
    this.paises=[]; //PARA MEJORAR LA VELOCIDAD
    this.paisServe.buscarRegion(region).subscribe(resp=>{
      this.paises = resp;
    })
    console.log(this.regionActiva);
    
  }

  getClaseCss(region:string){
    return (region == this.regionActiva) ? 'btn-primary':'btn-btn-outline-primary'
  }
}
