import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:Array<string> = [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query:string){
    query= query.trim().toLocaleLowerCase();//LO QUE VIENE QUITAR ESPACIOS CONVERTIRLO A NINUSCULA
    if (!this._historial.includes(query)) {//PARA NO VOLVER A BUSCAR
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      console.log(this._historial);
    }
    
  }
}
