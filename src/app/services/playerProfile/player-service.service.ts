import { Injectable } from '@angular/core';
import { Player } from '../../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerProfileService {

  constructor() { }

  player: Player;
  playerName: string;

  setPlayer(player: Player, playerName: string) {
    this.player = player;
    this.playerName = playerName;
  }
}
