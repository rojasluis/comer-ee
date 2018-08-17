import { Response, Http, Headers, RequestOptions, BaseRequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Options } from 'selenium-webdriver/opera';
import { ConfigService } from '../../../shared/config.service';




@Injectable()
export class ProductoService {

  constructor(
      private configService:ConfigService,
      private httpClient:HttpClient

  ) { }

	  
  getPdfListaProductos() {
    let url = this.configService.getUrlSecurityRes ("producto","pdfLista");
    
    let header = this.configService.getHeaderHttpClientGet();
    
     return this.httpClient.get(url,   {headers:header, responseType:'blob', observe: 'response'});
     
    
   
  }

}
