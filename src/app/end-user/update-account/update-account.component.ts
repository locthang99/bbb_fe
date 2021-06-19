import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent implements OnInit {

  listItem : any[];
  listItem2 : any[];
  constructor() {

    this.listItem = [
      {name:"Gói ca sĩ",discount:"20%",price:"1.200.000 VNĐ",img:"https://cdn.dribbble.com/users/875654/screenshots/5003101/singer_icon_1.jpg"},
      {name:"Gói vip",discount:"30%",price:"5.200.000 VNĐ",img:"https://cdn0.iconfinder.com/data/icons/royalty-program/512/royalty-program-member-vip-exclusive-18-512.png"},
      {name:"Gói vip 3 năm",discount:"10%",price:"3.200.000 VNĐ",img:"https://image.flaticon.com/icons/png/512/3972/3972605.png"},
    ]
    this.listItem2=[
      {name:"Gói vip 2 năm",discount:"25%",price:"2.000.000 VNĐ",img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/premium-account-2166682-1928181.png"},
      {name:"Gói vip 1 năm",discount:"10%",price:"1.200.000 VNĐ",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13TIH-ONJqVW0xaMTMZ40ZOETPunvF1OYnM9eGwOvyFPcI2MnPmVcVRgnv3wSwnfKE4Q&usqp=CAU"},
      {name:"Gói vip dùng thử",discount:"35%",price:"200.000 VNĐ",img:"https://icon-library.com/images/free-trial-icon/free-trial-icon-14.jpg"},

    ]
   }

  ngOnInit(): void {
  }
  onBuy()
  {

  }

}
