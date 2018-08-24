import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlesDocumentacionComponent } from './controles-documentacion.component';
import { ComFindTipoDocumentoSunatModule } from '../../intercambio/com-find-tipo-documento-sunat/com-find-tipo-documento-sunat.module';
import { MatSlideToggleModule } from '@angular/material';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ComFindTipoDocumentoSunatModule,
        MatSlideToggleModule        
    ],
    declarations: [ ControlesDocumentacionComponent]
})

export class ControlesDocumentacionModule { }