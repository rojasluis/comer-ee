import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-almacen-salida-main',
  templateUrl: './almacen-salida-main.component.html',
  styleUrls: ['./almacen-salida-main.component.css']
})
export class AlmacenSalidaMainComponent implements OnInit {
  showEdicion: boolean;
  showLista: boolean;
  constructor() { }

  ngOnInit() {
  }

  onActivate() {
    console.log("Activate outlet main");
    this.showLista = false;
    this.showEdicion = true;

  }  

  onDeactivate() {
    console.log("Deactivate outlet main");
    this.showLista = true;
    this.showEdicion = false;

  }


  onActivateLista() {
    console.log("Activate lista");
    this.showLista = true;
    this.showEdicion = false;

  }
  onDeactivateLista() {
    console.log("Deactivate Lista");
    this.showLista = false;
    this.showEdicion = true;

  }

}
