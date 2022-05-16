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
}
