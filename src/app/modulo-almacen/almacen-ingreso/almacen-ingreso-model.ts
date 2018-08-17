
import { AlmacenModel } from "../almacen/almacen-model";

import { AlmacenIngresoDetalleModel } from "./almacen-ingreso-detalle-model";
import { ProveedorclienteModel } from "../proveedorcliente/proveedorcliente-model";
import { EmpleadoModel } from "../../modulo-cuenta-rr-hh/empleado/empleado-model";
import { PeriodoalmacenModel } from "../periodoalmacen/periodoalmacen-model";
import { MotivoIngresoModel } from "../motivo-ingreso/motivo-ingreso-model";
import { TipodocumentoModel } from "../../modulo-sistema-config/tipodocumento/tipodocumento-model";



export class AlmacenIngresoModel {
    constructor(
        
        public iding001:number=0,
        public fecha:String=null,
        public hora:String = null,
        public proveedorcliente:ProveedorclienteModel =null,
        public almacen:AlmacenModel= null ,
        public nrodoc:number=null,
        //public com001:any=null,
        public empleado:EmpleadoModel=null,
        public glosa:string=null,
        public fechahorasys:String=null,
        //public condicionrelacioncompra:any = null,
        
        public periodoalmacen:PeriodoalmacenModel=null,
        public motivoingreso:MotivoIngresoModel =null,
        //public idtraslado:number=null,
        public tipodocumento:TipodocumentoModel=null,
        public seriedocproveedor:string=null,
        public nrodocproveedor:string=null,
       
        public ing002s:AlmacenIngresoDetalleModel[]=[],
        //public traslado:any=null
        
       

 
    ){

    }
}
