import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PuntoDeVentaModel } from '../punto-de-venta-model';
import { SharedService } from '../../../shared/servicio/shared.service';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  msgPopup: any[];
  id: number;
  sub: any;

  public puntoVentaModel: PuntoDeVentaModel;
  public puntoVentaForm: any;

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.sub = this.route.params.subscribe(
      params => {
        this.id = +params['id'];


      }
    );

  }


  ngOnInit() {
    this.buildForm();
    if(this.id != 0)
    this.getPuntoVenta();
  }

  getPuntoVenta() {
    this.sharedService.findById(this.id, "puntoventa", "findbyid")
      .subscribe(
      res => {
        let puntoVentaModelAux = new PuntoDeVentaModel();
        //puntoVentaModelAux = res.data;
        this.setForm(puntoVentaModelAux);
      }
      )

  }

  buildForm() {
    this.puntoVentaForm = this.formBuilder.group({
      idpuntoventa: ['0', Validators.required],
      dscpuntoventa: ['', Validators.required],
      mac: ['', Validators.required]
    })

  }

  setForm(model: PuntoDeVentaModel) {

    this.puntoVentaForm.controls['idpuntoventa'].setValue(model.idpuntoventa);
    this.puntoVentaForm.controls['dscpuntoventa'].setValue(model.dscpuntoventa);
    this.puntoVentaForm.controls['mac'].setValue(model.mac);

  }

  setModel() {
    this.puntoVentaModel = new PuntoDeVentaModel();
    this.puntoVentaModel.idpuntoventa = this.puntoVentaForm.controls['idpuntoventa'].value;
    this.puntoVentaModel.dscpuntoventa = this.puntoVentaForm.controls['dscpuntoventa'].value;
    this.puntoVentaModel.mac = this.puntoVentaForm.controls['mac'].value;

  }

  beforeSave(){
    this.setModel();
    this.save();
  }


  save() {

 
    this.sharedService.save(this.puntoVentaModel, "puntoventa", "save")
      .subscribe(
      res => {
        this.msgPopup = [];
     /*    if (res.success == false) {
          this.msgPopup.push({ severity: 'error', summary: 'Aviso', detail: res.msg });
          return false;
        }

        this.msgPopup.push({ severity: 'success', summary: 'Aviso', detail: 'Registro Grabado !' });
       
        this.puntoVentaModel.idpuntoventa = res.data.idpuntoventa;

        this.puntoVentaForm.controls['idpuntoventa'].setValue(res.data.idpuntoventa); */


      }
      )
  }
}
