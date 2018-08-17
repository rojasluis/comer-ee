
import { ProductoModel } from '../model/producto.model';

import { ProductoService } from '../service/producto.service';



import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { any } from 'codelyzer/util/function';
import * as jquery from 'jquery';
import { Message } from 'primeng/primeng';
import { BlockUIModule } from 'primeng/primeng';
import { SharedService } from '../../../shared/servicio/shared.service';




declare const $: any;

@Component({
  selector: 'ad-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],


  providers: [ProductoService, SharedService]
})

export class ProductoComponent implements OnInit {

  public titulo: string = "Maestro de productos";

  public productosModel: ProductoModel[] = [];
  public productoModel: ProductoModel = new ProductoModel();



  //-comandos obligatorios para la paginacion-//
  private msgPopup: Message[] = [];
  public blocked: boolean;

  public showPanelBuscarFlag: boolean = false;

  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;
  //-----------------------------------------//



  constructor(

    private productoService: ProductoService,
    private sharedService: SharedService,
   

  ) { }



  ngOnInit() {
   
  }

  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
  }
  refreshModel(e) {
    this.productosModel = e;
  }

  showPanelBuscar() {
    this.showPanelBuscarFlag = !this.showPanelBuscarFlag;
  }

  edit(e) {
    // let id = e.idproducto;
    // this.sharedService.findById(id,"producto","findbyid")
    //      .subscribe(
    //            result => {

    //                this.productoModel = result.data;

    //                console.log(this.productoModel);

    //            },
    //            error =>{},
    //            ()=>{
    //               this.showEdit();
    //            }
    //     ) ;
  }

  showEdit() {
    $('#myModal').modal({
      backdrop: 'static',
      keyboard: false  // to prevent closing with Esc button (if you want this too)
    });
  }


  pdfList() {
    //this.clear();
    this.productoService.getPdfListaProductos()
      .subscribe(
      res => {
        if (res.body.size == 0) {
          //this.showError();
          return;
        }
        //console.log(res.headers.get('X-Custom-Header'));
        console.log(res)
        debugger;
        let mediaType = res.headers.get("Content-Type");
        console.log(mediaType)
        let blob = new Blob([res.body], { type: mediaType });
        //let file = new window.Blob([res.body], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
        //let urlCreator = window.URL;
        //let url = urlCreator.createObjectURL(blob);
        //window.open(url,"titulo","height=600, width=600, status=yes, toolbar=no, menubar=no, location=no") ;


      },
      err => { console.log("error... al mostrar imagen...") }
      ,
      () => { console.log("completo subid ") }
      );
    ;


  }


}
