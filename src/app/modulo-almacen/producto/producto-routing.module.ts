import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComponent } from './producto/producto.component';
import { ProductodetalleComponent } from './productodetalle/productodetalle.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  {

    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '', component: ProductoComponent,  outlet: 'outlet-list-producto'
      },
      {
        path: 'productoedicion', component: ProductodetalleComponent
      }
  
    ]


  },

  {
    path: '**', component: ProductoComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
