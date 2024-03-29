import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.inteface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey:string='fNel52976UIKB0L8EIiPKyONZNIKpKKg';
  private servicioUrl:string='https://api.giphy.com/v1/stickers';
  private _historial:Array<string> = [];
  public resultados:Array<Gif> =[];
  get historial(){
    return [...this._historial];
  }

  constructor(private _http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!)||[];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!)||[];
  }

  buscarGifs(query:string){
    query= query.trim().toLocaleLowerCase();//LO QUE VIENE QUITAR ESPACIOS CONVERTIRLO A NINUSCULA
    if (!this._historial.includes(query)) {//PARA NO VOLVER A BUSCAR
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      //console.log(this._historial);
      localStorage.setItem('historial',JSON.stringify(this._historial))
    }
    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('limit','10')
    .set('q',query);
    //LA RESPUESTA LUCE COMO ESA INTERFACE
    this._http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params:params})
    .subscribe((response:SearchGifsResponse)=>{
        this.resultados = response.data;
        console.log(this.resultados);
        localStorage.setItem('resultados',JSON.stringify(this.resultados))

    })
    
  }
}
