import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlmacenIngresoMainComponent } from './almacen-ingreso-main/almacen-ingreso-main.component';
import { AlmacenIngresoListaComponent } from './almacen-ingreso-lista/almacen-ingreso-lista.component';
import { AlmacenIngresoEdicionComponent } from './almacen-ingreso-edicion/almacen-ingreso-edicion.component';
import { KardexOptsComponent } from '../kardex/kardex-opts/kardex-opts.component';




const routes: Routes = [
{

    path: 'main',
    component: AlmacenIngresoMainComponent,
    children: [
      {
        path: '', redirectTo:'lista'
      },
      {
        path: 'lista', component: AlmacenIngresoListaComponent,

        children : [
          {
            path : 'edicion', component: AlmacenIngresoEdicionComponent,
            children : [
              {
                path : 'kardex', component : KardexOptsComponent
              }
            ]
          }
        ]
      }
     
  
    ]


  },

  {
    path: '**', component: AlmacenIngresoMainComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenIngresoRoutingModule { }
