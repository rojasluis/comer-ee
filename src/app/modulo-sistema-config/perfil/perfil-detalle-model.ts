import { MenuModel } from "./menu-model";
import { PerfilModel } from "./perfil-model";

export class PerfilDetalleModel {  
    constructor(
        public idsysperfilesdetalle: string = null,
        public menu: MenuModel=null,
    ) {

    }
}
