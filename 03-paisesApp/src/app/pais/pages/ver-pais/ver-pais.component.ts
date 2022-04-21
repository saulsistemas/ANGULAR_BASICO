import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {  
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>
          this.paisService.getPaisId(id)
        )
      )
      .subscribe( resp=>{//params:any
        console.log(resp);
        
      })
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
