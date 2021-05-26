import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-search-input',
  styleUrls: ['./search-input.component.scss'],
  template: `
    <input class="search-input" type="search" placeholder={{placeholderString}} #input>
           <button type="button" class="btn btn-primary" (click)="onSearch.emit(input.value)">
           <i class="fas fa-search"></i>
         </button>
  `,
})
export class SearchInputComponent {
  @Input("placeholderString") placeholderString : string;
  @ViewChild('input', { static: true }) input: ElementRef;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  isInputShown = false;
  keyword = ""
}
