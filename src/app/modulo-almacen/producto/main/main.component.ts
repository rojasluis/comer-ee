import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-mainproducto',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public showLista: boolean = true;
  public showEdicion: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onActivate() {
    console.log("Activate edicion");
    this.showLista = false;
    this.showEdicion = true;

  }  

  onDeactivate() {
    console.log("Deactivate edicion");
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
