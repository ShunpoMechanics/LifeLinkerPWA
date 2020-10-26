import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate, UpdateActivatedEvent, UpdateAvailableEvent } from '@angular/service-worker';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ToastController, AlertController } from '@ionic/angular';
import { concat, interval, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  p1Life = 40;
  p1: Record<string, number>;
  p2Life = 40;
  p3Life = 40;
  p4Life = 40;
  subscriptions: Subscription[] = [];

  constructor(private screenOrientation: ScreenOrientation, private toastController: ToastController,
              private updater: SwUpdate, private alertController: AlertController, private appRef: ApplicationRef) {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  ngOnInit(): void {
    this.initUpdater();
  }

  initUpdater() {
    const updateInterval$ = interval(1000 * 600 * 24);
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
    const appStableInterval$ = concat(appIsStable$, updateInterval$);

    this.subscriptions.push(this.updater.available.subscribe((e) => this.onUpdateAvailable(e)));
    this.subscriptions.push(this.updater.activated.subscribe((e) => this.onUpdateActivated(e)));
    this.subscriptions.push(appStableInterval$.subscribe(() => this.checkForUpdate()));
  }

  async checkForUpdate() {
    if (this.updater.isEnabled) {
      await this.updater.checkForUpdate();
    }
  }

  async onUpdateAvailable(e: UpdateAvailableEvent) {
    // tslint:disable-next-line: no-string-literal
    const updateMessage = e.available.appData['updateMessage'];
    const alert = await this.alertController.create({
      header: 'Update available!',
      message: 'A new version of the application is available. ' + '(Details: ${updateMessage})' + 'Click OK to update now.',
      buttons: [
        {
          text: 'Not Now',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            await this.showToastMessage('Update deferred');
          }
        }, {
          text: 'OK',
          handler: async () => {
            await this.updater.activateUpdate();
            window.location.reload();
          }
        }
      ]
    });
    await alert.present();
  }
  async onUpdateActivated(e: UpdateActivatedEvent) {
    await this.showToastMessage('Application updating');
  }

  async showToastMessage(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
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

  promptRestart() {
    if (confirm('Do you want to restart?')){
    this.resetLife();
    }
  }

  resetLife() {
    this.p1Life = 40;
    this.p2Life = 40;
    this.p3Life = 40;
    this.p4Life = 40;
  }
}
