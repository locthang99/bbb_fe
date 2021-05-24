import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-test-custom',
  template: `
    <input class="search-input" placeholder={{placeholderString}}
           #input>
           <div class="con-icon">
           <i class="control-icon ion ion-ios-search"
           (click)="onSearchEvent(input.value)"></i>
           </div>
  `,
})
export class TestCustomComponent {
  @Input("placeholderString") placeholderString : string;
  @ViewChild('input', { static: true }) input: ElementRef;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  isInputShown = false;
  keyword = ""

showInput(){
  alert("aaaa")
}
  onSearchEvent(ev: any) {
    console.log(ev)
    this.onSearch.emit(ev);
  }
}
