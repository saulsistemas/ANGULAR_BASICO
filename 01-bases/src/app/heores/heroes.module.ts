import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent //PODER UTLIZAR ESTE COMPONENTE FUERA
    ],
    imports:[
        CommonModule //PARA QUE LEA CODIGO ANGULAR EN HTML
    ]
})
export class HeoroesModule{}