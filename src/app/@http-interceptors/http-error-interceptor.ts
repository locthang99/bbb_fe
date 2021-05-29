import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import { ToastComponent } from "../@theme/components/toast/toast.component";
import { lang } from "../@language/language";
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  public t: ToastComponent;
  constructor(t: ToastComponent) {
    this.t = t;
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log(request)
          // console.log(event)
          // do stuff with response if you want

          // switch(request.method)
          // {
          //   case "Delete":
          //     this.t.openToast("danger","401",lang.response_action.Unauthorize);
          //     console.log("401 interceptor");
          //     break;
          //   case "GET":
          //     this.t.openToast("basic","200","GET OK");
          //     break;
          //   default:
          //     break;
          // }
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 401:
              this.t.openToast("danger","401",lang.response_action.Unauthorize);
              console.log("401 interceptor");
              break;
            case 403:
              this.t.openToast("danger", "403", lang.response_action.Forbiden);
              break;
            default:
              this.t.openToast("danger", "404", lang.response_action.Notfound);
              //console.log("errrorrrr: "+err.status)
              break;
          }
        }
      }
    );
  }
}
