import { Component, OnInit } from '@angular/core';

import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
//import { MenuModel } from '../menu-model';
import { ItemEntregaModel } from '../../../qaliwarma/item-entrega/item-entrega-model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MenuModel } from '../../menu/menu-model';


@Component({
  selector: 'ad-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.css']
})
export class UsuarioMainComponent implements OnInit {
  // show: boolean;

  // constructor() { }

  // ngOnInit() {
  // }


  // onActivate() {
  //   console.log("Activate outlet main");
   
   

  // }  

  // onDeactivate() {
  //   console.log("Deactivate outlet main");
  //   this.show = true;
   

  // }




  selectedRowIndex: string = "";
  public displayedColumns: string[] = ['idmenu', 'label', 'leaf', 'routerlink'];

  public menuModel:MenuModel;
  public menusModel:MenuModel[]=[new MenuModel()];

  constructor(private crudHttpClientServiceShared:CrudHttpClientServiceShared,breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        this.displayedColumns :
        this.displayedColumns;
    });
   }

  ngOnInit() {
    // this.getAll();
  }

  highlight(row) {

    this.selectedRowIndex = row.idmenu;
  }

  // getAll(){
  //   this.crudHttpClientServiceShared.getall("menu","getall")
  //     .subscribe(
  //       res=> {
  //           this.menusModel = res.map(
  //             item => {
  //               return new MenuModel(item.idmenu,item.label,item.leaf,item.obs,item.routerlink,item.orden);
  //             }
  //           );
  //           console.log(this.menusModel)

  //       }
  //     )
  // }
}