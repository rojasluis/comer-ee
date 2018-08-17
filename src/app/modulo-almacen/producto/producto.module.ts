import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DataTableModule, GrowlModule, AutoCompleteModule, FileUploadModule } from 'primeng/primeng';


import { ProductoComponent } from './producto/producto.component';

import { ProductoRoutingModule } from './producto-routing.module';

import { MainComponent } from './main/main.component';
import { AutocompletComponent } from './autocomplet.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ProductodetalleComponent } from './productodetalle/productodetalle.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule,
    GrowlModule,
    DataTableModule,    
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule  ,
    FileUploadModule,
    HttpModule,
    HttpClientModule
  ],
 
  declarations: [ProductoComponent, ProductodetalleComponent, MainComponent, AutocompletComponent]
})
export class ProductoModule { }
