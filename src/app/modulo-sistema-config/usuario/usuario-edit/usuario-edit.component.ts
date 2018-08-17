import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { MSJ_SUCCESS } from '../../../shared/config.service.const';
import { UsuarioModel } from '../usuario-model';
import { FilialModel } from '../../filial/filial-model';
import { PerfilModel } from '../../perfil/perfil-model';

@Component({
  selector: 'ad-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
  providers: [CrudHttpClientServiceShared]
})
export class UsuarioEditComponent implements OnInit {
  public dbperfil: any;
  public dbfilial: any;
  perfil_model: PerfilModel;
  filial_model: FilialModel;
  usuario_model: UsuarioModel = new UsuarioModel;
  form: FormGroup;
  procesando: boolean = false;
  id: number = null;
  httpModel: string = 'usuario';
  isEdit: boolean = false;
  checkedActivo: boolean = true;
  private esEdicion: boolean = false;
  constructor(
    private crudService: CrudHttpClientServiceShared,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute
  ) {
    this.activateRoute.params.subscribe(
    params => this.id = params['id']);
  }    
  ngOnInit() {
    this.prepararFormulario();
  
    if (this.id) {
      this.editar();
    }
    if (this.id) { this.editar(); this.esEdicion = true; }
    this.listarperfiles();
    this.listarfilial();
  }  

  listarperfiles(){ 
    this.crudService.getall("perfil","getall").subscribe(rests=>{this.dbperfil=rests;
    console.log(rests);
    })
  }
  listarfilial(){ 
    this.crudService.getall("filial","getall").subscribe(rest=>{this.dbfilial=rest;
    console.log(rest);
    })
  }

  private prepararFormulario(): void {
    this.form = this.formBuilder.group({
      idusuario: this.usuario_model.idusuario || 0,
      dni: [this.usuario_model.dni, Validators.required],
      login: [this.usuario_model.login, Validators.required],
      clave: [this.usuario_model.clave, Validators.required],
      activo: [this.checkedActivo, Validators.required],
      status: [1],
      nomusuario: [this.usuario_model.nomusuario, Validators.required],
      filial: [this.usuario_model.filial, Validators.required],
      perfil: [this.usuario_model.perfil, Validators.required]      
    });
  }



  compareFilial(c1: any, c2: any): boolean { return c1 && c2 ? c1.idfilial === c2.idfilial : c1 === c2; }
  comparePerfil(c1: any, c2: any): boolean { return c1 && c2 ? c1.idperfil === c2.idperfil : c1 === c2; }

  guardarCambios(): void {
    if (!this.form.valid || this.procesando) { return; }
    this.procesando = true;
    
    this.form.value.activo = this.checkedActivo === true ? 1 : 0;
    this.usuario_model = <UsuarioModel>this.form.value;
    console.log(this.usuario_model);
    this.crudService.create(this.usuario_model, this.httpModel, 'save').subscribe(res => {
      setTimeout(() => {
        if (!this.isEdit) { this.prepararFormulario(); }
        swal(MSJ_SUCCESS); this.procesando = false;
      }, 800);
    });
  }

  private editar(): void {
    this.crudService.edit(this.id, this.httpModel, 'edit', true).subscribe(res => {
      this.usuario_model = res;               
           this.prepararFormulario();
    });
  }

  // guardarCambios(): void {
  //   if (!this.form.valid || this.procesando) { return; }
  //   this.procesando = true;

  //   this.crudService.create(this.form.value, this.httpModel, 'save').subscribe(res => {
  //     setTimeout(() => {
  //       if (!this.esEdicion) { this.prepararFormulario(); }
  //       swal(MSJ_SUCCESS); this.procesando = false;
  //     }, 800);
  //   });

  // }

  update(): void {
    if (!this.form.valid || this.procesando) { return; }
    this.procesando = true;
    
    this.form.value.activo = this.checkedActivo === true ? 1 : 0;
    this.usuario_model = <UsuarioModel>this.form.value;
    console.log(this.usuario_model);
    this.crudService.create(this.usuario_model, this.httpModel, 'update').subscribe(res => {
      setTimeout(() => {
        if (!this.isEdit) { this.prepararFormulario(); }
        swal(MSJ_SUCCESS); this.procesando = false;
      }, 800);
    });
  }
  
    
  }








//}