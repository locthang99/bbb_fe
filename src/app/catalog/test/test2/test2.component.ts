import { Component, OnInit, TemplateRef } from "@angular/core";

@Component({
  selector: "ngx-test2",
  templateUrl: "./test2.component.html",
  styleUrls: [],
})
export class Test2Component {
    public data:string;
    constructor( )
    {
        this.data="bbbbbbbbbbbbbbbbbbbbb"
    }
    onShow()
    {
    }
}
