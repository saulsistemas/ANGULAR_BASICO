import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
  nombreLower:string="saul";
  nombreUpper:string="SAUL";
  nombreCompleto:string="SaUl SanTAmaria"
  constructor() { }

 
}
