import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit{
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  termino:string="";

  debounce:Subject<string> = new Subject();
  constructor() { }

  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(300)//PARA  QUE DURE CIERTO TIEMPO A BUSCAR POR TEXT
      )
      .subscribe(valor=>{
        this.onDebounce.emit(valor)
        //console.log(valor);
        

      })
  }


  buscar(){
    this.onEnter.emit(this.termino)
  }
  teclaPresionada(event:any){
    const valor = event.target.value;
    //TAMBIEN SE PUEDE USARA DIRECTAMENTE termino YA QUE TRABAJA EN TIEMPO REAL
    //console.log(valor);
    this.debounce.next(valor)
    
  }
  
}
