import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenSalidaRoutingModule } from './almacen-salida-routing.module';
import { AlmacenSalidaMainComponent } from './almacen-salida-main/almacen-salida-main.component';
import { AlmacenSalidaEdicionComponent } from './almacen-salida-edicion/almacen-salida-edicion.component';
import { AlmacenSalidaListaComponent } from './almacen-salida-lista/almacen-salida-lista.component';
import { GrowlModule, DataTableModule, AutoCompleteModule, CalendarModule, MessagesModule } from 'primeng/primeng';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { KardexModule } from '../kardex/kardex.module';



@NgModule({
  imports: [
    CommonModule,
    AlmacenSalidaRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    MessagesModule,
    KardexModule,
    HttpClientModule
  ],
  declarations: [AlmacenSalidaMainComponent, AlmacenSalidaEdicionComponent, AlmacenSalidaListaComponent]
})
export class AlmacenSalidaModule { }
