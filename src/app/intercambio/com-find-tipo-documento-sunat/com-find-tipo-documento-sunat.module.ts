import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComFindTipoDocumentoSunatComponent } from './com-find-tipo-documento-sunat.component';

// material
import { MatSelectModule, MatInputModule } from '@angular/material';


@NgModule({
  imports: [  
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatSelectModule, MatInputModule
  ],
  declarations: [ComFindTipoDocumentoSunatComponent],
  exports: [ComFindTipoDocumentoSunatComponent]
})

export class ComFindTipoDocumentoSunatModule {}
