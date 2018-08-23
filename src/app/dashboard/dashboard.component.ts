import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { TipodocumentoModel } from '../modulo-sistema-config/tipodocumento/tipodocumento-model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  //@ViewChild('app-com-find-tipo-documento-sunat') doc;

  private countdownEndRef: Subscription = null;

  filtroPopo : string = "";
  documentoInit : any  = <TipodocumentoModel>JSON.parse('{"idTipoDocumento": 122, "codigoSunat": "0002", "dscTipoDocumento": "FACTURA" }');

  valorRecibido: any;

  constructor() { }

  ngOnInit(): void {    

    //this
  }


  aaa(value: string) {
    this.filtroPopo = value;
  }
}
