import { Component, OnInit } from '@angular/core';
import {ItemHttpClient} from 'app/services/item/item-service'
import {OrderHttpClient} from 'app/services/order/order-service'
import { SortParameter, PagedSortResponse } from "app/services/dto-base";
@Component({
  selector: 'ngx-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent implements OnInit {

  isLoading = false;
  listItem : any[];
  listItem2 : any[];
  sortParameter: SortParameter;
  constructor(private itemService: ItemHttpClient,private orderService : OrderHttpClient) {
    let sortParam = new SortParameter();
    itemService.get(sortParam).then(res=>{
      this.listItem=res.data
    })
   }

  ngOnInit(): void {
  }
  onPay(itemId:any)
  {
    if(this.isLoading)
      return;
    this.isLoading = true;
    this.orderService.initRequestPayment(itemId).then(res=>{
      if(res.data.payUrl!=null)
      {
        console.log("pay momo")
        window.open(res.data.payUrl, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
      }
      this.isLoading = false;
    })
  }

}
