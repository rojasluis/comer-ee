import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListaComponent } from './lista/lista.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  {
    path : 'main' , component : MainComponent,
    children : [
      {
        path : '' , redirectTo : 'lista'
      },
      {
        path : 'lista' , component : ListaComponent,

        children : [
          {
            path : 'edicion' , component : EditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuntoDeVentaRoutingModule { }
