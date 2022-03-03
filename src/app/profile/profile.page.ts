import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { GameService } from '../services/game/game.service';
import { PlayerProfileService } from '../services/playerProfile/player-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public playerProfileService: PlayerProfileService, public gameService: GameService) { }

  playerName: string;
  player: Player;

  ngOnInit() {
    this.player = this.playerProfileService.player;
    this.playerName = this.gameService.getName(this.player.position);
    document.getElementById("colorPicker").style.backgroundColor = this.player.color;
  }

  ionViewWillEnter() {
    document.getElementById("colorPicker").style.backgroundColor = this.player.color;
  }
  // setName(name: string) {
  //   this.gameService.setName(this.player.position, name);
  // }

  togglePartners() {
    this.player.partners = !this.player.partners;
    this.gameService.setPartners(this.player.position);
  }

  infectUp() {
    this.player.infect++;
  }

  infectDown() {
    this.player.infect--;
  }

  commanderDamageUp(commander: number) {
    switch (commander) {
      case 1:
        this.player.commanderDamageFromPlayer1First++;
        break;
      case 2:
        this.player.commanderDamageFromPlayer2First++;
        break;
      case 3:
        this.player.commanderDamageFromPlayer3First++;
        break;
      case 4:
        this.player.commanderDamageFromPlayer4First++;
        break;
      }
    }

  altCommanderDamageUp(commander: number) {
    switch (commander) {
      case 1:
        this.player.commanderDamageFromPlayer1Second++;
        break;
      case 2:
        this.player.commanderDamageFromPlayer2Second++;
        break;
      case 3:
        this.player.commanderDamageFromPlayer3Second++;
        break;
      case 4:
        this.player.commanderDamageFromPlayer4Second++;
    }
  }

    commanderDamageDown(commander: number) {
      switch (commander) {
        case 1:
          this.player.commanderDamageFromPlayer1First--;
          break;
        case 2:
          this.player.commanderDamageFromPlayer2First--;
          break;
        case 3:
          this.player.commanderDamageFromPlayer3First--;
          break;
        case 4:
          this.player.commanderDamageFromPlayer4First--;
          break;
      }
      }

      altCommanderDamageDown(commander: number) {
        switch (commander) {
          case 1:
            this.player.commanderDamageFromPlayer1Second--;
            break;
          case 2:
            this.player.commanderDamageFromPlayer2Second--;
            break;
          case 3:
            this.player.commanderDamageFromPlayer3Second--;
            break;
          case 4:
            this.player.commanderDamageFromPlayer4Second--;
            break;
        }
        }
  }

