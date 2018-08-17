
import { AlmacenModel } from "../almacen/almacen-model";


import { AlmacenSalidaDetalleModel } from "./almacen-salida-detalle-model";
import { ProveedorclienteModel } from "../proveedorcliente/proveedorcliente-model";
import { EmpleadoModel } from "../../modulo-cuenta-rr-hh/empleado/empleado-model";
import { PeriodoalmacenModel } from "../periodoalmacen/periodoalmacen-model";
import { MotivoSalidaModel } from "../motivo-salida/motivo-salida-model";


export class AlmacenSalidaModel {

    constructor(
        public idsalida001:number=0,
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
        public motivosalida:MotivoSalidaModel =null,
        //public idtraslado:number=null,
        //public tipodocumento:TipodocumentoModel=null,
        //public seriedocproveedor:string=null,
        //public nrodocproveedor:string=null,
       
        public salida002s:AlmacenSalidaDetalleModel[]=[],
        //public traslado:any=null

    ){

         
    }

 
}
