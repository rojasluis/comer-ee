import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comp-find-almacen',
  templateUrl: './comp-find-almacen.component.html',
  styleUrls: ['./comp-find-almacen.component.scss']
})
export class CompFindAlmacenComponent implements OnInit {

  myControl = new FormControl();
  
  constructor() { }

  ngOnInit() {
  }

}
