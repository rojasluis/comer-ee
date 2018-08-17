import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';

import { AlmacenIngresoModel } from '../almacen-ingreso-model';
import { SharedService } from '../../../shared/servicio/shared.service';

@Component({
  selector: 'ad-almacen-ingreso-lista',
  templateUrl: './almacen-ingreso-lista.component.html',
  styleUrls: ['./almacen-ingreso-lista.component.css'],
  providers : [SharedService]
})
export class AlmacenIngresoListaComponent implements OnInit {
  showLista: boolean = true;

  public almacenIngresosModel:AlmacenIngresoModel[]=[];

  public titulo:string = "Ingreso Almacen";

  //-comandos obligatorios para la paginacion-//
  private msgPopup: Message[] = [];
  public blocked: boolean;

  public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;
  //-----------------------------------------//


  constructor(private sharedService:SharedService ) { }

  ngOnInit() {
  }


  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
  }
  refreshModel(e) {
    this.almacenIngresosModel = e;
  }

  showPanelBuscar() {
    this.showPanelBuscarFlag = !this.showPanelBuscarFlag;
  }


  onActivate() {
    console.log("Activate lista");
    this.showLista = false;
  
  }  

  onDeactivate() {
    console.log("Deactivate lista en lista de ingresos");
    this.showLista = true;
    
  }


  ocultarLista(){
    this.showLista = false;
  }


}
