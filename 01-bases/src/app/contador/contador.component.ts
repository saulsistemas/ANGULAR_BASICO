import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
    
      <h1> {{title}} </h1>
      <button (click)="agregar()">+1</button>
      <span> {{numero}} </span>
      <button (click)="numero=numero-1">-1</button>
      <button (click)="acumular(numero)">Acumular</button>

    
    `,
})

export class ContadorComponent{
  title = '01-bases';
  numero:number =10;

  agregar(){
    this.numero = this.numero+1;
  }

  acumular(valor:number){
    this.numero += valor;

  }

}