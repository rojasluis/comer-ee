import { UsuarioEmpleadoModel } from "../../modulo-sistema-config/usuario/usuario-empleado-model";




export class EmpleadoModel {
    constructor(
        public idempleado:number=0,
        public nomempleado:string=null,
        public fechaingreso:Date=null,
        public fechanacimiento:Date=null,
        public direccion:string=null,
        public telefono:string=null,
        public email:string=null,
        public dni:string=null,
        public usuarioempleados:UsuarioEmpleadoModel[] = []
        
    ){

    }
}
