import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { debug } from 'util';
import { UsuarioModel } from '../usuario-model';
import { FilialModel } from '../../filial/filial-model';
import { PerfilModel } from '../../perfil/perfil-model';

import { UsuarioEmpleadoModel } from '../usuario-empleado-model';

import { UsuarioService } from '../usuario.service';
import { EmpleadoService } from '../../../modulo-cuenta-rr-hh/empleado/empleado.service';
import { SharedService } from '../../../shared/servicio/shared.service';
import { EmpleadoModel } from '../../../modulo-cuenta-rr-hh/empleado/empleado-model';



@Component({
  selector: 'ad-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
  providers: [SharedService, UsuarioService, EmpleadoService]
})
export class UsuarioEditComponent implements OnInit {
  msgPopup = [];
  detail: any;
  msgs = [];
  action: string;

  id: number;
  sub: any;

  public imageSmall: string;
  public imageLarge: string;
  public urlCargarImagenes: string;
  private loadedFilial: boolean = false;
  private loadedPerfil: boolean = false;
  private data: Observable<any>;
  private suscripcion: any;
  public usuarioForm: any;
  public usuarioModel: UsuarioModel = new UsuarioModel();

  public filialsModel: FilialModel[] = [];
  public filialModel: FilialModel;

  public perfilsModel: PerfilModel[] = [];
  public perfilModel: PerfilModel;

  public empleadoModel: EmpleadoModel;
  public empleadosModel: EmpleadoModel[] = [];

  public usuarioEmpleadosModel:UsuarioEmpleadoModel[] = [];
  public usuarioEmpleadoModel:UsuarioEmpleadoModel;

  constructor(private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private usuarioService: UsuarioService,

    private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService
  ) {

    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];


      }
    );
  }

  ngOnInit() {
    this.buidForm();
    this.Observar();
    this.urlImage();


  }

  buidForm() {
    this.usuarioForm = this.formBuilder.group({
      idusuario: ['0'],

      nomusuario: ['', Validators.required],
      dni: ['', Validators.required],
      login: ['', Validators.required],
      clave: ['', Validators.required],
      activo: ['0', Validators.required],
      perfil: ['', Validators.required],
      filial: ['', Validators.required],
      status: ['', Validators.required],
      usuarioempleados: ['']
    })

  }

  beforeSave() {
   

    let build = this.usuarioForm;
    this.usuarioModel = new UsuarioModel();
    this.usuarioModel.idusuario = build.controls['idusuario'].value;//
    this.usuarioModel.nomusuario = build.controls['nomusuario'].value;
    this.usuarioModel.dni = build.controls['dni'].value;
    this.usuarioModel.login = build.controls['login'].value;
    this.usuarioModel.clave = build.controls['clave'].value;

    this.usuarioModel.perfil = build.controls['perfil'].value;

    this.usuarioModel.filial = build.controls['filial'].value;
    this.usuarioModel.status = build.controls['status'].value == true ? 1 : 0;
    this.usuarioModel.activo = this.usuarioModel.status;
   
    this.usuarioModel.usuarioempleados = build.controls['usuarioempleados'].value == "" ? null:build.controls['usuarioempleados'].value;


    this.save();

  }

  save() {

    debugger;
    this.sharedService.save(this.usuarioModel, "usuario", "save")
      .subscribe(
      res => {
        this.msgPopup = [];
     /*    if (res.success == false) {
          this.msgPopup.push({ severity: 'error', summary: 'Aviso', detail: res.msg });
          return false;
        } */

        this.msgPopup.push({ severity: 'success', summary: 'Aviso', detail: 'Registro Grabado !' });

        //this.usuarioModel.idusuario = res.idusuario;

        //this.usuarioForm.controls['idusuario'].setValue(res.idusuario);


      }
      )
  }

  editUsuario(id: number) {
    this.sharedService.findById(id, "usuario", "findbyid")
      .subscribe(
      res => {
        //this.usuarioModel = res.data;
   
        this.usuarioEmpleadosModel = this.usuarioModel.usuarioempleados;
   
        this.setForm(this.usuarioModel);
        this.getImage(id, "small");

      })
  }

  setForm(model: UsuarioModel) {

   
    this.usuarioForm.controls['idusuario'].setValue(model.idusuario);
    this.usuarioForm.controls['nomusuario'].setValue(model.nomusuario);
    this.usuarioForm.controls['dni'].setValue(model.dni);
    this.usuarioForm.controls['login'].setValue(model.login);
    this.usuarioForm.controls['clave'].setValue(model.clave);

    this.usuarioForm.controls['perfil'].setValue(model.perfil);
    this.usuarioForm.controls['filial'].setValue(model.filial);
    this.usuarioForm.controls['status'].setValue(model.status == 1 ? true : false);
    this.usuarioForm.controls['usuarioempleados'].setValue(model.usuarioempleados );
    

  }

  Observar() {
    this.data = new Observable(
      observer => {

        this.getFilial(observer);

        this.getPerfil(observer);

      }

    );

    this.suscripcion = this.data.subscribe(
      value => {

        if (value == 1) {
          this.loadedPerfil = true;
        }
        if (value == 2) {
          this.loadedFilial = true;
        }
        console.log("valor ... " + value);

        if (this.loadedFilial && this.loadedPerfil) {
          if (isNaN(this.id) || this.id == 0) {
            console.log("nuevo usuario")
            //this.usuarioModel = new UsuarioModel();
            //this.usuarioModel.idusuario = 0;
            this.buidForm();
            this.usuarioForm.controls['idusuario'].setValue(0);
          } else {
            console.log("edit usuario");
            this.editUsuario(this.id);
          }
        }

      }
    )
  }

  getPerfil(obs: any) {
    this.sharedService.getAll("perfil", "getall")
      .subscribe(
      res => {

        //this.perfilsModel = res;
        obs.next(1);
      }
      )

  }

  getFilial(obs: any) {
    this.sharedService.getAll("filial", "getall")
      .subscribe(
      res => {
        //this.filialsModel = res.data;
        obs.next(2);
      }
      )

  }

  getEmpleadoByDni() {
    let dni = this.usuarioForm.controls['dni'].value;
    
    this.empleadoService.getEmpleadoByDni(dni)
      .subscribe(
      res => {
    /*     if (res.success == true) {
          this.usuarioEmpleadosModel= [];
          this.empleadoModel = res.data;
          this.empleadosModel[0] = this.empleadoModel;
          
          this.usuarioEmpleadoModel = new UsuarioEmpleadoModel();
          this.usuarioEmpleadoModel.idusuarioempleado = '',
          this.usuarioEmpleadoModel.empleado = this.empleadosModel[0];
          this.usuarioEmpleadoModel.usuario = this.usuarioModel;

          this.usuarioEmpleadosModel.push(this.usuarioEmpleadoModel);

          this.usuarioForm.controls['usuarioempleados'].setValue(this.usuarioEmpleadoModel);


        } else {
          this.detail = 'No se encontro DNI, en la tabla empleados para relacionarlo con Usuarios ...';
          this.show();
        } */

      }
      )
  }

  urlImage() {
    this.urlCargarImagenes = this.usuarioService.getUrlUploadImage();
    console.log(this.urlCargarImagenes);

  }
  onBeforeUpload(event) {

  
    //event.xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem("token"));
    //event.formData.append('idusuario', this.usuarioForm.controls["idusuario"].value);

  }
  onUpload(event) {
    this.getImage(this.usuarioForm.controls["idusuario"].value, "small");

  }

  getImage(idusuario, imageSize) {

    if (!idusuario) {
      return;
    }
    let src = "";
    this.usuarioService.getImage(idusuario, imageSize)
      .subscribe(
      result => {
        //src = result.data;


    /*      if (result.data.length > 0) {
          let str = 'data:image/jpeg;base64,' + result.data[0];
          switch (imageSize) {
            case 'small':
              this.imageSmall = str;
              break;
            case 'large':
              this.imageLarge = str;
              break;

            default:
              // code...
              break;
          } 
        } */

      },
      err => { console.log("error... al mostrar imagen...") }
      , () => { console.log("completo subid ") }
      );
  }



  show() {
    this.msgs.push({ severity: 'info', summary: '', detail: this.detail });
  }

  hide() {
    this.msgs = [];
  }

}
