import { ProveedorclienteModel } from "../../../modulo-almacen/proveedorcliente/proveedorcliente-model";

export class TransportistaModel {

    constructor(
        public idTransportista:number=null,
        public proveedorcliente:ProveedorclienteModel=null
    ){

    }
}
