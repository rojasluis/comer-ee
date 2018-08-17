import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';



@Injectable()
export class UsuarioService {

  constructor(private configService: ConfigService
    , private http: HttpClient

  ) { }


  getUrlUploadImage() {
    let url = this.configService.getUrlSecurityRes("usuario", "uploadimage");
    return url;
  }

  getImage(idusuario, imageSize) {
    let obj = { 'idusuario': idusuario, 'imageSize': imageSize };

    let objser = this.configService.serialize(obj);


    let url = this.configService.getUrlSecurityRes("usuario", "getImage");


    return this.http.post(url, objser, {headers:this.configService.getHeaderHttpClientForm() , responseType:'json' } )
      
      ;


  }

}
