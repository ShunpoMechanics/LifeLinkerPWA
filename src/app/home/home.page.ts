import { ApplicationRef, Component, OnInit } from "@angular/core";
import {
  SwUpdate,
  UpdateActivatedEvent,
  UpdateAvailableEvent,
} from "@angular/service-worker";
import { ToastController, AlertController } from "@ionic/angular";
import { concat, interval, Subscription } from "rxjs";
import { first } from "rxjs/operators";
import { Player } from "../models/player";
import { GameService } from "../services/game/game.service";
import { PlayerProfileService } from "../services/playerProfile/player-service.service";

import * as Hammer from "hammerjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  playerCount = 2;
  p1Name: string;
  p3Inited = false;
  p4Inited = false;
  p5Inited = false;
  p6Inited = false;
  diceNotRolled = true;
  diceResult = 0;
  p1: Player = {
    position: 1,
    life: 40,
    commanderDamageFromPlayer1First: 0,
    commanderDamageFromPlayer1Second: 0,
    commanderDamageFromPlayer2First: 0,
    commanderDamageFromPlayer2Second: 0,
    commanderDamageFromPlayer3First: 0,
    commanderDamageFromPlayer3Second: 0,
    commanderDamageFromPlayer4First: 0,
    commanderDamageFromPlayer4Second: 0,
    commanderDamageFromPlayer5First: 0,
    commanderDamageFromPlayer5Second: 0,
    commanderDamageFromPlayer6First: 0,
    commanderDamageFromPlayer6Second: 0,
    infect: 0,
    partners: false,
    color: "white",
  };
  p2Name: string;
  p2: Player = {
    position: 2,
    life: 40,
    commanderDamageFromPlayer1First: 0,
    commanderDamageFromPlayer1Second: 0,
    commanderDamageFromPlayer2First: 0,
    commanderDamageFromPlayer2Second: 0,
    commanderDamageFromPlayer3First: 0,
    commanderDamageFromPlayer3Second: 0,
    commanderDamageFromPlayer4First: 0,
    commanderDamageFromPlayer4Second: 0,
    commanderDamageFromPlayer5First: 0,
    commanderDamageFromPlayer5Second: 0,
    commanderDamageFromPlayer6First: 0,
    commanderDamageFromPlayer6Second: 0,
    infect: 0,
    partners: false,
    color: "black",
  };
  p3Name: string;
  p3: Player = {
    position: 3,
    life: 40,
    commanderDamageFromPlayer1First: 0,
    commanderDamageFromPlayer1Second: 0,
    commanderDamageFromPlayer2First: 0,
    commanderDamageFromPlayer2Second: 0,
    commanderDamageFromPlayer3First: 0,
    commanderDamageFromPlayer3Second: 0,
    commanderDamageFromPlayer4First: 0,
    commanderDamageFromPlayer4Second: 0,
    commanderDamageFromPlayer5First: 0,
    commanderDamageFromPlayer5Second: 0,
    commanderDamageFromPlayer6First: 0,
    commanderDamageFromPlayer6Second: 0,
    infect: 0,
    partners: false,
    color: "black",
  };
  p4Name: string;
  p4: Player = {
    position: 4,
    life: 40,
    commanderDamageFromPlayer1First: 0,
    commanderDamageFromPlayer1Second: 0,
    commanderDamageFromPlayer2First: 0,
    commanderDamageFromPlayer2Second: 0,
    commanderDamageFromPlayer3First: 0,
    commanderDamageFromPlayer3Second: 0,
    commanderDamageFromPlayer4First: 0,
    commanderDamageFromPlayer4Second: 0,
    commanderDamageFromPlayer5First: 0,
    commanderDamageFromPlayer5Second: 0,
    commanderDamageFromPlayer6First: 0,
    commanderDamageFromPlayer6Second: 0,
    infect: 0,
    partners: false,
    color: "white",
  };
  p5Name: string;
  p5: Player = {
    position: 5,
    life: 40,
    commanderDamageFromPlayer1First: 0,
    commanderDamageFromPlayer1Second: 0,
    commanderDamageFromPlayer2First: 0,
    commanderDamageFromPlayer2Second: 0,
    commanderDamageFromPlayer3First: 0,
    commanderDamageFromPlayer3Second: 0,
    commanderDamageFromPlayer4First: 0,
    commanderDamageFromPlayer4Second: 0,
    commanderDamageFromPlayer5First: 0,
    commanderDamageFromPlayer5Second: 0,
    commanderDamageFromPlayer6First: 0,
    commanderDamageFromPlayer6Second: 0,
    infect: 0,
    partners: false,
    color: "white",
  };
  p6Name: string;
  p6: Player = {
    position: 6,
    life: 40,
    commanderDamageFromPlayer1First: 0,
    commanderDamageFromPlayer1Second: 0,
    commanderDamageFromPlayer2First: 0,
    commanderDamageFromPlayer2Second: 0,
    commanderDamageFromPlayer3First: 0,
    commanderDamageFromPlayer3Second: 0,
    commanderDamageFromPlayer4First: 0,
    commanderDamageFromPlayer4Second: 0,
    commanderDamageFromPlayer5First: 0,
    commanderDamageFromPlayer5Second: 0,
    commanderDamageFromPlayer6First: 0,
    commanderDamageFromPlayer6Second: 0,
    infect: 0,
    partners: false,
    color: "black",
  };

  subscriptions: Subscription[] = [];

  constructor(
    private toastController: ToastController,
    private updater: SwUpdate,
    private alertController: AlertController,
    private appRef: ApplicationRef,
    public player: PlayerProfileService,
    public gameService: GameService
  ) {}
  ngOnInit(): void {
    this.initUpdater();
    this.initListeners();
  }

  initListeners() {
    // Lower life
    var manager1 = new Hammer(document.getElementById("p1LifeDown"));
    manager1.on(
      "press",
      function () {
        this.p1.life = this.p1.life - 10;
      }.bind(this)
    );

    manager1.on(
      "tap",
      function () {
        this.p1.life--;
      }.bind(this)
    );

    var manager3 = new Hammer(document.getElementById("p3LifeDown"));
    manager3.on(
      "press",
      function () {
        this.p3.life = this.p3.life - 10;
      }.bind(this)
    );

    manager3.on(
      "tap",
      function () {
        this.p3.life--;
      }.bind(this)
    );

    // Raise Life
    var manager7 = new Hammer(document.getElementById("p1LifeUp"));
    manager7.on(
      "press",
      function () {
        this.p1.life = this.p1.life + 10;
      }.bind(this)
    );

    manager7.on(
      "tap",
      function () {
        this.p1.life++;
      }.bind(this)
    );

    var manager9 = new Hammer(document.getElementById("p3LifeUp"));
    manager9.on(
      "press",
      function () {
        this.p3.life = this.p3.life + 10;
      }.bind(this)
    );

    manager9.on(
      "tap",
      function () {
        this.p3.life++;
      }.bind(this)
    );
  }

  fontColor(color: string) {
    if (
      color == "white" ||
      color == "greenyellow" ||
      color == "lightblue" ||
      color == "orange" ||
      color == "yellow" ||
      color == "aquamarine" ||
      color == "aqua" ||
      color == "cyan"
    )
      return "black";
    return "white";
  }

  setColors() {
    document.getElementById("player1").style.backgroundColor = this.p1.color;
    if (this.p1.color == "white")
      document.getElementById("player1").style.color = "black";
    else document.getElementById("player1").style.color = "white";

    document.getElementById("player2").style.backgroundColor = this.p2.color;
    if (this.p2.color == "white")
      document.getElementById("player2").style.color = "black";
    else document.getElementById("player2").style.color = "white";

    document.getElementById("player3").style.backgroundColor = this.p3.color;
    if (this.p3.color == "white")
      document.getElementById("player3").style.color = "black";
    else document.getElementById("player3").style.color = "white";

    document.getElementById("player4").style.backgroundColor = this.p4.color;
    if (this.p4.color == "white")
      document.getElementById("player4").style.color = "black";
    else document.getElementById("player4").style.color = "white";

    if (this.playerCount > 4) {
      document.getElementById("player5").style.backgroundColor = this.p5.color;
      if (this.p5.color == "white")
        document.getElementById("player5").style.color = "black";
      else document.getElementById("player5").style.color = "white";
    }
    if (this.playerCount > 5) {
      document.getElementById("player6").style.backgroundColor = this.p6.color;
      if (this.p6.color == "white")
        document.getElementById("player6").style.color = "black";
      else document.getElementById("player6").style.color = "white";
    }
  }

  initUpdater() {
    const updateInterval$ = interval(1000 * 600 * 24);
    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const appStableInterval$ = concat(appIsStable$, updateInterval$);

    this.subscriptions.push(
      this.updater.available.subscribe((e) => this.onUpdateAvailable(e))
    );
    this.subscriptions.push(
      this.updater.activated.subscribe((e) => this.onUpdateActivated(e))
    );
    this.subscriptions.push(
      appStableInterval$.subscribe(() => this.checkForUpdate())
    );
  }

  async checkForUpdate() {
    if (this.updater.isEnabled) {
      await this.updater.checkForUpdate();
    }
  }

  async onUpdateAvailable(e: UpdateAvailableEvent) {
    // tslint:disable-next-line: no-string-literal
    const updateMessage = e.available.appData["updateMessage"];
    const alert = await this.alertController.create({
      header: "Update available!",
      message:
        "A new version of the application is available. Press OK to update now.",
      buttons: [
        {
          text: "Not Now",
          role: "cancel",
          cssClass: "secondary",
          handler: async () => {
            await this.showToastMessage("Update deferred");
          },
        },
        {
          text: "OK",
          handler: async () => {
            await this.updater.activateUpdate();
            window.location.reload();
          },
        },
      ],
    });
    await alert.present();
  }
  async onUpdateActivated(e: UpdateActivatedEvent) {
    await this.showToastMessage("Application updating");
  }

  async showToastMessage(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  setPlayer(player: Player, playerName: string) {
    this.player.setPlayer(player, playerName);
  }

  lowerLife(id: string) {
    switch (id) {
      case "p1Life":
        this.p1.life--;
        break;
      case "p2Life":
        this.p2.life--;
        break;
      case "p3Life":
        this.p3.life--;
        break;
      case "p4Life":
        this.p4.life--;
        break;
      case "p5Life":
        this.p5.life--;
        break;
      case "p6Life":
        this.p6.life--;
        break;
    }
  }

  lowerLife10(id: string) {
    switch (id) {
      case "p1Life":
        this.p1.life = this.p1.life - 10;
        break;
      case "p2Life":
        this.p2.life = this.p2.life - 10;
        break;
      case "p3Life":
        this.p3.life = this.p2.life - 10;
        break;
      case "p4Life":
        this.p4.life = this.p2.life - 10;
        break;
      case "p5Life":
        this.p5.life = this.p2.life - 10;
        break;
      case "p6Life":
        this.p6.life = this.p2.life - 10;
        break;
    }
  }

  raiseLife(id: string) {
    switch (id) {
      case "p1Life":
        this.p1.life++;
        break;
      case "p2Life":
        this.p2.life++;
        break;
      case "p3Life":
        this.p3.life++;
        break;
      case "p4Life":
        this.p4.life++;
        break;
      case "p5Life":
        this.p5.life++;
        break;
      case "p6Life":
        this.p6.life++;
        break;
    }
  }

  promptRestart() {
    if (confirm("Do you want to restart?")) {
      this.resetLife();
    }
  }

  hideOrShow(position: number) {
    if (position <= this.playerCount) return "flex";
    return "none";
  }

  addPlayer() {
    if (this.playerCount < 6) {
      this.playerCount++;
      this.gameService.game.playerCount++;
    }

      if (this.playerCount == 3 && !this.p3Inited) {
        var manager2 = new Hammer(document.getElementById("p2LifeDown"));
        manager2.on(
          "press",
          function () {
            this.p2.life = this.p2.life - 10;
          }.bind(this)
        );

        manager2.on(
          "tap",
          function () {
            this.p2.life--;
          }.bind(this)
        );

        var manager8 = new Hammer(document.getElementById("p2LifeUp"));
        manager8.on(
          "press",
          function () {
            this.p2.life = this.p2.life + 10;
          }.bind(this)
        );

        manager8.on(
          "tap",
          function () {
            this.p2.life++;
          }.bind(this)
        );
        
        this.p3Inited = true;
      }

      else if (this.playerCount == 4 && !this.p4Inited) {
        var manager4 = new Hammer(document.getElementById("p4LifeDown"));
        manager4.on(
          "press",
          function () {
            this.p4.life = this.p4.life - 10;
          }.bind(this)
        );

        manager4.on(
          "tap",
          function () {
            this.p4.life--;
          }.bind(this)
        );

        var manager10 = new Hammer(document.getElementById("p4LifeUp"));
        manager10.on(
          "press",
          function () {
            this.p4.life = this.p4.life + 10;
          }.bind(this)
        );

        manager10.on(
          "tap",
          function () {
            this.p4.life++;
          }.bind(this)
        );
        
        this.p4Inited = true;
      }

      else if (this.playerCount == 5 && !this.p5Inited) {
        var manager5 = new Hammer(document.getElementById("p5LifeDown"));
        manager5.on(
          "press",
          function () {
            this.p5.life = this.p5.life - 10;
          }.bind(this)
        );

        manager5.on(
          "tap",
          function () {
            this.p5.life--;
          }.bind(this)
        );

        var manager11 = new Hammer(document.getElementById("p5LifeUp"));
        manager11.on(
          "press",
          function () {
            this.p5.life = this.p5.life + 10;
          }.bind(this)
        );

        manager11.on(
          "tap",
          function () {
            this.p5.life++;
          }.bind(this)
        );
        
        this.p5Inited = true;
      }
      else if (this.playerCount == 6 && !this.p6Inited) {
        var manager6 = new Hammer(document.getElementById("p6LifeDown"));
        manager6.on(
          "press",
          function () {
            this.p6.life = this.p6.life - 10;
          }.bind(this)
        );

        manager6.on(
          "tap",
          function () {
            this.p6.life--;
          }.bind(this)
        );

        var manager12 = new Hammer(document.getElementById("p6LifeUp"));
        manager12.on(
          "press",
          function () {
            this.p6.life = this.p6.life + 10;
          }.bind(this)
        );

        manager12.on(
          "tap",
          function () {
            this.p6.life++;
          }.bind(this)
        );

        this.p6Inited = true;
      }
  }

  removePlayer() {
    if (this.playerCount > 2) {
      this.playerCount--;
      this.gameService.game.playerCount--;
    }
  }

  resetLife() {
    this.p1.life = 40;
    this.p2.life = 40;
    this.p3.life = 40;
    this.p4.life = 40;
    this.p5.life = 40;
    this.p6.life = 40;

    this.p1.commanderDamageFromPlayer1First = 0;
    this.p1.commanderDamageFromPlayer1Second = 0;
    this.p1.commanderDamageFromPlayer2First = 0;
    this.p1.commanderDamageFromPlayer2Second = 0;
    this.p1.commanderDamageFromPlayer3First = 0;
    this.p1.commanderDamageFromPlayer3Second = 0;
    this.p1.commanderDamageFromPlayer4First = 0;
    this.p1.commanderDamageFromPlayer4Second = 0;
    this.p1.infect = 0;
    // this.p1.partners = false;
    // this.game.game.player1Partners = false;

    this.p2.commanderDamageFromPlayer1First = 0;
    this.p2.commanderDamageFromPlayer1Second = 0;
    this.p2.commanderDamageFromPlayer2First = 0;
    this.p2.commanderDamageFromPlayer2Second = 0;
    this.p2.commanderDamageFromPlayer3First = 0;
    this.p2.commanderDamageFromPlayer3Second = 0;
    this.p2.commanderDamageFromPlayer4First = 0;
    this.p2.commanderDamageFromPlayer4Second = 0;
    this.p2.infect = 0;
    // this.p2.partners = false;
    // this.game.game.player2Partners = false;

    this.p3.commanderDamageFromPlayer1First = 0;
    this.p3.commanderDamageFromPlayer1Second = 0;
    this.p3.commanderDamageFromPlayer2First = 0;
    this.p3.commanderDamageFromPlayer2Second = 0;
    this.p3.commanderDamageFromPlayer3First = 0;
    this.p3.commanderDamageFromPlayer3Second = 0;
    this.p3.commanderDamageFromPlayer4First = 0;
    this.p3.commanderDamageFromPlayer4Second = 0;
    this.p3.infect = 0;
    // this.p3.partners = false;
    // this.game.game.player3Partners = false;

    this.p4.commanderDamageFromPlayer1First = 0;
    this.p4.commanderDamageFromPlayer1Second = 0;
    this.p4.commanderDamageFromPlayer2First = 0;
    this.p4.commanderDamageFromPlayer2Second = 0;
    this.p4.commanderDamageFromPlayer3First = 0;
    this.p4.commanderDamageFromPlayer3Second = 0;
    this.p4.commanderDamageFromPlayer4First = 0;
    this.p4.commanderDamageFromPlayer4Second = 0;
    this.p4.infect = 0;
    // this.p4.partners = false;
    // this.game.game.player4Partners = false;

    this.p5.commanderDamageFromPlayer1First = 0;
    this.p5.commanderDamageFromPlayer1Second = 0;
    this.p5.commanderDamageFromPlayer2First = 0;
    this.p5.commanderDamageFromPlayer2Second = 0;
    this.p5.commanderDamageFromPlayer3First = 0;
    this.p5.commanderDamageFromPlayer3Second = 0;
    this.p5.commanderDamageFromPlayer4First = 0;
    this.p5.commanderDamageFromPlayer4Second = 0;
    this.p5.infect = 0;
    // this.p4.partners = false;
    // this.game.game.player4Partners = false;

    this.p6.commanderDamageFromPlayer1First = 0;
    this.p6.commanderDamageFromPlayer1Second = 0;
    this.p6.commanderDamageFromPlayer2First = 0;
    this.p6.commanderDamageFromPlayer2Second = 0;
    this.p6.commanderDamageFromPlayer3First = 0;
    this.p6.commanderDamageFromPlayer3Second = 0;
    this.p6.commanderDamageFromPlayer4First = 0;
    this.p6.commanderDamageFromPlayer4Second = 0;
    this.p6.infect = 0;
    // this.p4.partners = false;
    // this.game.game.player4Partners = false;
  }

  rollDice() {
    this.diceResult = Math.floor(Math.random() * 6);
  }
}
