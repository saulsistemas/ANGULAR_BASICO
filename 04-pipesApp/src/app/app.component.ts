import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string='Saul SaNTamaria';
  valor:number=1000;
  obj={
    nombre:this.nombre,
  }
  cambiarNombre(){
    this.nombre;
  }
}


