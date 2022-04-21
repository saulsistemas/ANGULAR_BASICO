import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paist.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!:Country;
  constructor( private activatedRoute:ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {  
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.getPaisId(id) ),
        tap((resp:any) => console.log(resp[0])
        )
      )
      .subscribe( (pais:any)=>this.pais=pais[0])
    //this.activatedRoute.params
    //  .subscribe( ({id})=>{//params:any
    //    console.log(id); //BIENE DE LA URL DEFINIDO EN ROUTER
    //    this.paisService.getPaisId(id)
    //      .subscribe(pais=>{
    //        console.log(pais);
    //      })
    //  })
  }

}
