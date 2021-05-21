import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-search-input',
  styleUrls: ['./search-input.component.scss'],
  template: `
    <input class="search-input" placeholder={{placeholderString}}
           #input
           (input)="onInput($event)">
           <div class="con-icon">
           <i class="control-icon ion ion-ios-search"
           (click)="showInput()"></i>
           </div>
  `,
})
export class SearchInputComponent {
  @Input("placeholderString") placeholderString : string;
  @ViewChild('input', { static: true }) input: ElementRef;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  isInputShown = false;

showInput(){
  alert("aaaa")
}
  onInput(val: string) {
    this.search.emit(val);
  }
}
