import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (window.location.href.includes("admin"))
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem("admin.token")}`,
        },
      });
    else
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem("enduser.token")}`,
        },
      });
    return next.handle(request);
  }
}
