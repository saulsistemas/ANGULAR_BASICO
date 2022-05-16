import { Component } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre:string = "Saul";
  genero:string="masculino";

  invitacionMap={
    'masculino':'inviarlo',
    'femenino':'inviarla',

  }

  //i18nPlural
  clientes:Array<string>=['maria','pedro','carlos','miguel'];
  clienteMap={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'Tenemos un cliente esperando',
    '=2':'Tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'
  }
}
