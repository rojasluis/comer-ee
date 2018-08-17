import { Component, OnInit } from '@angular/core';

import { Message, ConfirmationService } from 'primeng/primeng';

import { UsuarioModel } from '../usuario-model';
import { SharedService } from '../../../shared/servicio/shared.service';



@Component({
  selector: 'ad-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers : [ConfirmationService,SharedService]
})
export class UsuarioListComponent implements OnInit {
  show: boolean = true
  msgs: Message[] = [];

  public titulo:string="Usuarios";
  public usuariosModel:UsuarioModel[] = [];
  public usuarioModel:UsuarioModel;


   //-comandos obligatorios para la paginacion-//
   private msgPopup: Message[] = [];
   public blocked: boolean;
 
   public showPanelBuscarFlag: boolean = false;
 
   public filterPage: Object;
   public displayModal: boolean = false;
   public refreshPage: boolean = false;
   //-----------------------------------------//


  constructor(private confirmationService: ConfirmationService,
    private sharedService: SharedService) {
      
     }

  ngOnInit() {
  }


  filter(e) {
    this.filterPage = JSON.stringify(e.filters);
  }
  refreshModel(e) {
    this.usuariosModel = e;
  }

  showPanelBuscar() {
    this.showPanelBuscarFlag = !this.showPanelBuscarFlag;
  }
  onActivate() {
    console.log("Activate outlet main");
   
   

  }  

  onDeactivate() {
    console.log("Deactivate outlet main");
    this.show = true;
   

  }


  ocultarLista(){
    this.show = false;
  }


  confirm(e) {
    let id = e.idusuario;
    this.confirmationService.confirm({
        message: 'ESTA SEGURO DE ELIMINAR AL USUARIO : ' + e.nomusuario + '? ',
        
        accept: () => {
            //Actual logic to perform a confirmation
            this.sharedService.delete(id,"usuario","delete")
              .subscribe(
                res => {
              /*    if(res.success){
                  this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
                 }else{
                  this.msgs = [{severity:'info', summary:'Rejected', detail: res.msg}];
                 } */
                }
              )
        }
    });
}

  

}
