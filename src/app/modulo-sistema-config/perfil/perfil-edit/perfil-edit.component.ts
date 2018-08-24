import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudHttpClientServiceShared } from '../../../shared/servicio/crudHttpClient.service.shared';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { MSJ_SUCCESS } from '../../../shared/config.service.const';

import { TreeNode } from 'primeng/api';


import { PerfilModel } from '../perfil-model';
import { MenuModel } from '../menu-model';
import { PerfilDetalleModel } from '../perfil-detalle-model';

@Component({
  selector: 'ad-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css'],
  providers: [CrudHttpClientServiceShared]
})


export class PerfilEditComponent implements OnInit {
  perfil_model: PerfilModel;
  menu_model: MenuModel[];
  perfil_detalle_model: PerfilDetalleModel[];

  form: FormGroup;
  procesando: boolean = false;
  id: number = null;

  httpModel: string = 'perfil';

  files: TreeNode[] = [];
  selectedFiles: TreeNode[] = [];
  arr: any[] = [];

  isEdit: boolean = false;

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
    this.maestros();
    if (this.id) {
      this.editar();
    }
  }

  private maestros(): void {
    this.crudService.getall('menu', 'getall').subscribe((res: any) => {
      debugger;
      let str: string = res.data

      str = str.replace(/\"items\":/g, "\"children\":");
      this.files = <TreeNode[]>JSON.parse(str);
      console.log(this.files);
    });
  }

  // selecciona los permisos al cargar usuario existente
  flattenTree(node: TreeNode, nodos: any) {
    if (node.children) {
      node.children.forEach(childNode => {
        nodos.map(n => {
          if (n.leaf === 1) {
            if (childNode['idmenu'] === n.idmenu) {
              this.arr.push(childNode);
              node.partialSelected = true;
            }
          }
        });
      });
    }
  }

  private prepararFormulario(): void {
    this.form = this.formBuilder.group({
      dscperfil: ['', Validators.required],
      idfilial: 1,
      idperfil: 0,
      perfilesdetalles: this.perfil_detalle_model
    });
  }

  /// recorre los elemento seleccionados adicionandoles el padre si no lo tienen
  private cocinarMenuSeleccionados(): PerfilDetalleModel[] {
    console.log('selectedFiles', this.selectedFiles);
    this.selectedFiles.map((x: any) => {
      let padre: any;
      let findPadre: number;

      if (x.leaf === 1) {
        padre = x.parent;
        findPadre = this.selectedFiles.filter((z: any) => z.idmenu === padre.idmenu).length;
        if (findPadre === 0) { this.selectedFiles.push(padre); }
      }
    });

    return this.selectedFiles.map((row: any) => {
      const menu = new MenuModel(row.idmenu, row.label, row.routerLink || '', row.leaf);
      return null //new PerfilDetalleModel(null, menu);
    });
  }

  private editar(): void {
    this.crudService.edit(this.id, this.httpModel, 'edit').subscribe(res => {
      this.form.setValue(res);
      this.perfil_detalle_model = <PerfilDetalleModel[]>res.perfilesdetalles;

      // selecciona los accesos al cargar usuario
      // const nodos: any = <TreeNode>this.perfil_detalle_model.map(x => x.menu);
      // this.files.map(f => this.flattenTree(f, nodos))
      // this.selectedFiles = this.arr;
      // this.isEdit = true;
    });
  }

  guardarCambios(): void {
    if (!this.form.valid || this.procesando) { return; }
    this.procesando = true;
    this.form.value.perfilesdetalles = this.cocinarMenuSeleccionados();;
    this.perfil_model = <PerfilModel>this.form.value;

    console.log(this.perfil_model);

    this.crudService.create(this.perfil_model, this.httpModel, 'save').subscribe(res => {
      console.log(res);
      setTimeout(() => {
        if (!this.isEdit) { 
          this.prepararFormulario();
        }
        swal(MSJ_SUCCESS); this.procesando = false;
      }, 800);
    });
  }
}
