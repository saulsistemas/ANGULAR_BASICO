import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey:string='fNel52976UIKB0L8EIiPKyONZNIKpKKg'
  private _historial:Array<string> = [];
  public resultados:Array<any> =[];
  get historial(){
    return [...this._historial];
  }

  constructor(private _http:HttpClient){

  }

  buscarGifs(query:string){
    query= query.trim().toLocaleLowerCase();//LO QUE VIENE QUITAR ESPACIOS CONVERTIRLO A NINUSCULA
    if (!this._historial.includes(query)) {//PARA NO VOLVER A BUSCAR
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      //console.log(this._historial);
    }

    this._http.get(`https://api.giphy.com/v1/stickers/search?api_key=fNel52976UIKB0L8EIiPKyONZNIKpKKg&q=${query}&limit=10`)
    .subscribe((response:any)=>{
        this.resultados = response.data;
        console.log(this.resultados);
    })
    
  }
}
