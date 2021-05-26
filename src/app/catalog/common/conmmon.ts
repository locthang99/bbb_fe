import { Injectable} from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { PopupDialogDialogComponent } from "../popup/popup-dialog.component";
import { DatePipe } from '@angular/common';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';
@Injectable({
  providedIn: "root",
})
export class Common {
  constructor(private dialogService: NbDialogService,private toastrService: NbToastrService) {}
  resolveResoponse(
    status: number,
    nameObj: string,
    showToast: boolean,
    customMsg: string
  ) {
    let context: any;
    if (customMsg !== null || customMsg !=="") {
      context = {
        status: status,
        msg: customMsg,
      };
    } else {
      switch (status) {
        case 200:
          context = {
            status: 200,
            msg: `Tạo ${nameObj} thàng công`,
          };
          break;
        case 400:
          context = {
            status: 400,
            msg: "Dữ liệu nhập lỗi",
          };
          break;
        case 401:
          context = {
            status: 401,
            msg: "Chưa login",
          };
          break;
        case 403:
          context = {
            status: 403,
            msg: "Chưa cấp quyền thực hiện thao tác này",
          };
          break;
        default:
          context = {
            status: 500,
            msg: "Đã xảy ra lỗi",
          };
          break;
      }
    }
    if(showToast==true)
    {
      if(context.status==200)
        {
          this.showToast("success",context.status,context.msg)
        }
        else
        {
          this.showToast("warning",context.status,context.msg)
        }
      
    }
    else
    {
    this.dialogService.open(PopupDialogDialogComponent, {
      context: context,
    });
  }
  }


private showToast(type: NbComponentStatus, title: string, body: string) {
  const config = {
    status: type,
    destroyByClick: false,
    duration: 2000,
    hasIcon: true,
    position: NbGlobalPhysicalPosition.TOP_RIGHT,
    preventDuplicates: true,
  };
  const titleContent = title ? `: ${title}` : '';
  this.toastrService.show(
    body,
    `Code ${titleContent}`,
    config);
}
}
export function parseDatetime(input:string)
{
  return new DatePipe('en-US').transform(input, 'dd/MM/yyyy')
}