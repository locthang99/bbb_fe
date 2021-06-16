import { Component, HostBinding, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnDestroy {
  @Input()
  @HostBinding('class.collapsed')
  @Input() songName:string;
  @Input() singer:string;
  @Input() urlThumbnail:string;
  collapsed: boolean;

  @Input() showInfo:boolean;
  @ViewChild("player") player:HTMLAudioElement;
  shuffle: boolean;
  timing = 0;
  url='http://api.mp3.zing.vn/api/streaming/audio/ZWZCDEOA/128'
  constructor() {
    this.createPlayer();
  }

  ngOnDestroy() {
    this.player.pause();
    this.player.src = '';
    this.player.load();
  }

  prev() {
    this.player.currentTime -= 5;
  }

  next() {
    this.player.currentTime += 5;
  }

  playPause() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  setVolume(volume: number) {
    this.player.volume = volume / 100;
  }

  getVolume(): number {
    return this.player.volume * 100;
  }

  setProgress(duration: number) {
    this.player.currentTime =  duration;
  }

  getProgress(): number {
    return this.player.currentTime || 0;
  }

  private createPlayer() {
    this.player = new Audio();
    this.player.onended = () => this.next();
    //this.setTrack();
  }

  private reload() {
    //this.setTrack();
    this.player.play();
  }

  public setTrack(url) {
    this.url = url;
    this.player.src = url;
    //this.player.load();
  }
  public float2int(i:number)
  {
    return Math.trunc(i)
  }
}
