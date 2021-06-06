import { Component, OnInit, TemplateRef } from "@angular/core";
@Component({
  selector: "ngx-playlist",
  templateUrl:"./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent {
    public data:string;
    constructor()
    {
        this.data="bbbbbbbbbbbbbbbbbbbbb"
    }
    onShow()
    {
    }
}
