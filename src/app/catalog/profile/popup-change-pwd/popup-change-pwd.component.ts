import { Component, OnInit } from '@angular/core';
import {EnduserHttpClient} from 'app/services/auth/auth-enduser-service'
@Component({
  selector: 'ngx-popup-change-pwd',
  templateUrl: './popup-change-pwd.component.html',
  styleUrls: ['./popup-change-pwd.component.scss']
})
export class PopupChangePwdComponent implements OnInit {

  oldPwd:string;
  newPwd:string;
  confirmNewPwd:string;
  msgErr="";
  msgSuccess="";

  constructor(private authService:EnduserHttpClient) { }

  ngOnInit(): void {
  }
  onChangePwd()
  {
    if(this.newPwd!=this.confirmNewPwd)
    {
      this.msgErr = "2 mật khẩu mới không trùng nhau..";
      this.msgSuccess ="";
      return;
    }
    this.authService.changePassword(this.oldPwd,this.newPwd).then(res=>{
      if(res.code==200)
      {
        this.msgSuccess = "Đổi thành công!"
        this.msgErr=""
      }
      else
      {
        this.msgSuccess = ""
        this.msgErr="Đổi không thành công!"
      }
    })
  }

}
