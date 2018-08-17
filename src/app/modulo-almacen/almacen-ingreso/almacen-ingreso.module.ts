import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenIngresoRoutingModule } from './almacen-ingreso-routing.module';
import { AlmacenIngresoMainComponent } from './almacen-ingreso-main/almacen-ingreso-main.component';
import { AlmacenIngresoEdicionComponent } from './almacen-ingreso-edicion/almacen-ingreso-edicion.component';
import { AlmacenIngresoListaComponent } from './almacen-ingreso-lista/almacen-ingreso-lista.component';
import { GrowlModule, DataTableModule, AutoCompleteModule, CalendarModule, MessagesModule } from "primeng/primeng";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { KardexModule } from '../kardex/kardex.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AlmacenIngresoRoutingModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    MessagesModule,
    KardexModule
  ],
  declarations: [AlmacenIngresoMainComponent, AlmacenIngresoEdicionComponent, AlmacenIngresoListaComponent]
})
export class AlmacenIngresoModule { }
