import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-almacen-ingreso-main',
  templateUrl: './almacen-ingreso-main.component.html',
  styleUrls: ['./almacen-ingreso-main.component.css']
})
export class AlmacenIngresoMainComponent implements OnInit {
  showEdicion: boolean;
  showLista: boolean;

  constructor() { }

  ngOnInit() {
  }
  onActivate() {
    console.log("Activate edicion main 1 ");
    //this.showLista = true;
    

  }  

  onDeactivate() {
    console.log("Deactivate edicion main 2 ");
    this.showLista = false;
  

  }


}
