import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
    private _personajes:Array<Personaje> =[
        {nombre:'Goku',poder:65645},
        {nombre:'vegeta',poder:65645},
      ];
  
    get personajes():Personaje[]{
        return [...this._personajes];
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}