import { Component, OnInit, ViewChild } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/primeng';
import { UsuarioModel } from '../usuario-model';
import { SharedService } from '../../../shared/servicio/shared.service';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import { MSJ_ALERT_BORRAR, MSJ_SUCCESS, MSJ_ELIMINADO } from '../../../shared/config.service.const';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from '../../../../../node_modules/rxjs/operators';
import { Table } from '../../../../../node_modules/primeng/table';

@Component({
  selector: 'ad-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  providers : [ConfirmationService,SharedService, CrudHttpClientServiceShared]
})
export class UsuarioListComponent implements OnInit {
  public Typeahead = new Subject<string>();
  show: boolean = true
  msgs: Message[] = [];
  public dbfilial: any;
  public dbusuarios: any;
  public titulo:string="Usuarios";
  public usuariosModel:UsuarioModel[] = [];
  public usuarioModel:UsuarioModel;
  public showChild: boolean = false;
  private msgPopup: Message[] = [];
  public blocked: boolean;
  @ViewChild('dt') dataTable: Table;
  public showPanelBuscarFlag: boolean = false;
  public http_model = "usuario"; 
  public filterPage: Object;
  public displayModal: boolean = false;
  public refreshPage: boolean = false;
   
   constructor(
    private sharedService: SharedService,
    private crudService: CrudHttpClientServiceShared
    ) {}
  ngOnInit() {
    this.listarusuarios();
    this.initObservable();
    this.listarfilial();

}
private initObservable(): void {
  this.Typeahead.pipe(distinctUntilChanged(), debounceTime(500))
    .subscribe((res: any) => {
      const value = res[0]; const field = res[1]; const operator = res[2];
      this.dataTable.filter(value, field, operator);
    });
}
listarfilial(){ 
  this.crudService.getall("filial","getall").subscribe(rest=>{this.dbfilial=rest;
  console.log(rest);
  })
}
  listarusuarios(){
    this.crudService.getall(this.http_model,"getall").subscribe(rest=>{this.dbusuarios=rest;
    console.log(rest);
    })
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
public borrarRegistro(data: any): any {
  swal(MSJ_ALERT_BORRAR).then((res: any) => {
    if (res.value) {
      this.crudService.delete(data.idusuario, this.http_model, 'delete').subscribe(res => {
        swal(MSJ_ELIMINADO);

        this.listarusuarios();
      });
    }
  });
}     
  onActivateChild() { this.showChild = true; }
  onDeactivateChild() {
    this.showChild = false;
    if (this.sharedService.refreshByStorage(this.http_model)) { this.listarusuarios() }

  }
}