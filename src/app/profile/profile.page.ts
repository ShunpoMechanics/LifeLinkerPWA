import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';
import { GameService } from '../services/game/game.service';
import { PlayerProfileService } from '../services/playerProfile/player-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public playerProfileService: PlayerProfileService, public gameService: GameService, private route: ActivatedRoute) {
   }

  playerName: string;
  player: Player;
  playerCount = 2;

  ngOnInit() {
    this.player = this.playerProfileService.player;
    this.playerName = this.gameService.getName(this.player.position);
  }

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
      case 5:
        this.player.commanderDamageFromPlayer5First++;
        break;
      case 6:
        this.player.commanderDamageFromPlayer6First++;
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
        break;
      case 5:
        this.player.commanderDamageFromPlayer5Second++;
        break;
      case 6:
        this.player.commanderDamageFromPlayer6Second++;
        break;
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
        case 5:
          this.player.commanderDamageFromPlayer5First--;
          break;
        case 6:
          this.player.commanderDamageFromPlayer6First--;
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
          case 5:
            this.player.commanderDamageFromPlayer5Second--;
            break;
          case 6:
            this.player.commanderDamageFromPlayer6Second--;
            break;
        }
        }
      
  setPlayer(player: Player, playerName: string) {
    this.playerProfileService.setPlayer(player, playerName);
  }
  }

