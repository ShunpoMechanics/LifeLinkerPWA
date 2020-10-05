import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  p1Life = 40;
  p2Life = 40;
  p3Life = 40;
  p4Life = 40;

  constructor(private screenOrientation: ScreenOrientation) {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  lowerLife(id: string) {
    switch (id)
    {
      case 'p1Life':
        this.p1Life--;
        break;
      case 'p2Life':
        this.p2Life--;
        break;
      case 'p3Life':
        this.p3Life--;
        break;
      case 'p4Life':
        this.p4Life--;
        break;
    }
  }

  raiseLife(id: string) {
    switch (id)
    {
      case 'p1Life':
        this.p1Life++;
        break;
      case 'p2Life':
        this.p2Life++;
        break;
      case 'p3Life':
        this.p3Life++;
        break;
      case 'p4Life':
        this.p4Life++;
        break;
    }
  }
}
