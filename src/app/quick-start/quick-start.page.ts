import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerProfileService } from '../services/playerProfile/player-service.service';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.page.html',
  styleUrls: ['./quick-start.page.scss'],
})
export class QuickStartPage implements OnInit {

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

  constructor(public playerService: PlayerProfileService,) { }

  ngOnInit() {
  }

  setPlayer(player: Player, playerName: string) {
    this.playerService.setPlayer(player, playerName);
  }

}
