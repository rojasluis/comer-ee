import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as jwt_decode from "jwt-decode";

@Injectable()
export class InterceptorAutorizationService implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("token");


    if (idToken) {

      const role = jwt_decode(idToken);

      console.log(role)

      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + idToken)
      });

      return next.handle(cloned)

    }
    return next.handle(req);

  }
}
