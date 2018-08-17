import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipodocumentoRoutingModule } from './tipodocumento-routing.module';
import { TipodocumentoGridComponent } from './tipodocumento-grid/tipodocumento-grid.component';
import { TipodocumentoEditComponent } from './tipodocumento-edit/tipodocumento-edit.component';
import { TipodocumentoMainComponent } from './tipodocumento-main/tipodocumento-main.component';

@NgModule({
  imports: [
    CommonModule,
    TipodocumentoRoutingModule
  ],
  declarations: [TipodocumentoGridComponent, TipodocumentoEditComponent, TipodocumentoMainComponent]
})
export class TipodocumentoModule { }
