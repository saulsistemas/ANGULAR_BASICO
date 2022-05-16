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
  valor:boolean=false;
  invitacionMap={
    'masculino':'inviarlo',
    'femenino':'inviarla',

  }
  cambiarCliente(){
    if (this.valor) {
      this.valor=false;
      this.nombre="Saul";
      this.genero='masculino';
    }else{
      this.valor=true;
      this.nombre="melisa";
      this.genero='femenino';
    }
   
  }
  //i18nPlural
  clientes:Array<string>=['maria','pedro','carlos','miguel'];
  clienteMap={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'Tenemos un cliente esperando',
    '=2':'Tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  EliminarCliente(){
    this.clientes.pop(); //ELIMINA EL ULTIMO ELEMENTO
  }


  //key value

  persona={
    nombre:'Saul',
    edad:28,
    direccion:'mz klt1'
  }

  heroes=[
    {nombre:'supersaul',vuela:true},
    {nombre:'robin',value:false},
    {nombre:'acuaman',value:false},
  ]
}
