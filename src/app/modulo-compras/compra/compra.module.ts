import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { RegistrarfacturacompraComponent } from './registrarfacturacompra/registrarfacturacompra.component';
import { SharedModule } from '../../shared/shared.module';


const routes : Routes = [
  {
    path : '',
    component : RegistrarfacturacompraComponent
  }

];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrarfacturacompraComponent]
})
export class CompraModule { }
