import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';

import { AlmacenSalidaService } from '../almacen-salida.service';
import { AlmacenSalidaModel } from '../almacen-salida-model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../shared/servicio/shared.service';


@Component({
  selector: 'ad-almacen-salida-lista',
  templateUrl: './almacen-salida-lista.component.html',
  styleUrls: ['./almacen-salida-lista.component.css'],
  providers : [SharedService,AlmacenSalidaService]
})
export class AlmacenSalidaListaComponent implements OnInit {

  public almacenSalidasModel:AlmacenSalidaModel[]=[] ;

  public titulo:string = "Salida Almacen";
  
    //-comandos obligatorios para la paginacion-//
    private msgPopup: Message[] = [];
    public blocked: boolean ;
    public showLista:boolean = true;
  
    public showPanelBuscarFlag: boolean = false;
  
    public filterPage: Object;
    public displayModal: boolean = false;
    public refreshPage: boolean = false;
    //-----------------------------------------//
    private myUrl:any;

  constructor(private sharedService:SharedService, private almacenSalidaService:AlmacenSalidaService,  private route: ActivatedRoute,
    private router: Router) {

  

   }

  ngOnInit() {
  }


  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
  }
  refreshModel(e) {
    this.almacenSalidasModel = e;
  }

  showPanelBuscar() {
    this.showPanelBuscarFlag = !this.showPanelBuscarFlag;
  }


  onActivate() {
    console.log("Activate lista");
    this.showLista = false;
    // this.showEdicion = true;

  }  

  onDeactivate() {
    console.log("Deactivate lista");
     this.showLista = true;
    // this.showEdicion = false;

  }

  ocultarLista(){
    this.showLista = false;
  }

  printNota(e){

    let idsalida001 = e.idsalida001
    console.log(idsalida001);

    this.almacenSalidaService.getPdfNotaSalida("salida001","pdfnotasalida",idsalida001);
      



  }



}
