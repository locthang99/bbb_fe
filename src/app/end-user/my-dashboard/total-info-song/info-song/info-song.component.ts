import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-info-song',
  styleUrls: ['./info-song.component.scss'],
  template: `
    <nb-card (click)="on = !on" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>
      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ value }}</div>
      </div>
    </nb-card>
  `,
})
export class InfoSongComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() value: string;
  @Input() on = true;
}