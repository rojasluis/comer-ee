import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntoDeVentaRoutingModule } from './punto-de-venta-routing.module';
import { MainComponent } from './main/main.component';
import { ListaComponent } from './lista/lista.component';
import { EditComponent } from './edit/edit.component';
import { GrowlModule, DataTableModule, FileUploadModule, ConfirmDialogModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PuntoDeVentaRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ConfirmDialogModule
  ],
  declarations: [MainComponent, ListaComponent, EditComponent]
})
export class PuntoDeVentaModule { }
