import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
       <b><a href="https://gitlab.com/thang040899/big-bluebirds-music">BigBlueBirds Team</a></b> 2020
    </span>
    <div class="socials">
      <a href="https://gitlab.com/thang040899/big-bluebirds-music" class="ion ion-social-github"></a>
      <a href="https://gitlab.com/thang040899/big-bluebirds-music" class="ion ion-social-facebook"></a>
      <a href="https://gitlab.com/thang040899/big-bluebirds-music" class="ion ion-social-twitter"></a>
      <a href="https://gitlab.com/thang040899/big-bluebirds-music" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
