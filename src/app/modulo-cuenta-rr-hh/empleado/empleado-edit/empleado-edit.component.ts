import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { EmpleadoModel } from '../empleado-model';
import { debug } from 'util';
import { SharedService } from '../../../shared/servicio/shared.service';


@Component({
  selector: 'ad-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css'],
  providers : [SharedService]
})
export class EmpleadoEditComponent implements OnInit {
  id: number;
  sub: any;
  msgPopup: any[];
  public empleadoModel:EmpleadoModel;

  public empleadoForm:any;

  constructor(private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private route: ActivatedRoute
  )
   { 
    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    ); 

   }

  ngOnInit() {
    this.buildForm();
    this.setModel(this.empleadoModel,this.empleadoForm);
    if(this.id != 0)
    this.getMarca();
  }


  buildForm() {
    this.empleadoForm = this.formBuilder.group({
      idempleado: ['0'],

      nomempleado: ['', Validators.required],
      dni: ['', Validators.required],
      fechaingreso :[''],
      fechanacimiento : [''],
      direccion : [''],
      telefono : [''],
      email:[''],

      usuarioempleados: ['']
    })

  }

  getMarca() {
    this.sharedService.findById(this.id, "marca", "findbyid")
      .subscribe(
      res => {
       
        //this.empleadoModel = res.data;
        this.empleadoForm.setValue(this.empleadoModel);
        //this.setForm(this.empleadoModel,this.buildForm);
      }
      )

  }


  setModel(model:EmpleadoModel, form:any) {
    
    //this.empleadoModel.
    //model.idempleado = this.empleadoForm.array.forEach(element => {
      
    //});
    //this.marcaArticuloModel.idmarca = form.controls['idmarca'].value;
    //this.marcaArticuloModel.dscmarca = this.marcaForm.controls['dscmarca'].value;
 
  }

  beforeSave(){
    this.setModel(this.empleadoModel,this.empleadoForm);
    this.save();
  }


  save() {

 
    this.sharedService.save(this.empleadoModel, "empleado", "save")
      .subscribe(
      res => {
        this.msgPopup = [];
     /*    if (res.success == false) {
          this.msgPopup.push({ severity: 'error', summary: 'Aviso', detail: res.msg });
          return false;
        } */

        this.msgPopup.push({ severity: 'success', summary: 'Aviso', detail: 'Registro Grabado !' });
       debugger;
       /*  this.empleadoModel.idempleado = res.data.idempleado;

        this.empleadoForm.controls['idempleado'].setValue(res.data.idempleado); */


      }
      )
  }

}
