import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import "rxjs/add/operator/catch";

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

            return next.handle(request).catch((errorResponse: HttpErrorResponse) => {


                return Observable.throw(errorResponse);
            });

    }
}