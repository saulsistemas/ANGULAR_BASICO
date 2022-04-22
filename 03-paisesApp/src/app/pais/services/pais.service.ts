import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paist.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string="https://restcountries.com/v3.1"
  constructor(private _http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this._http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this._http.get<Country[]>(url);
  }

  getPaisId(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this._http.get<Country>(url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this._http.get<Country[]>(url);
  }
}
