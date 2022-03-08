import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { GameService } from '../services/game/game.service';
import { PlayerProfileService } from '../services/playerProfile/player-service.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.page.html',
  styleUrls: ['./color-picker.page.scss'],
})
export class ColorPickerPage implements OnInit {

  constructor(public playerProfileService: PlayerProfileService, public gameService: GameService) { }

  public player: Player;

  colors = [
    'red', 'white', 'black', 'blue', 'green', 'yellow', 'purple', 'orange', 'lightblue', 'greenyellow', 'pink', 'orangered', 'brown', 'cyan', 'indigo', 'blueviolet', 'aqua', 'aquamarine', 'goldenrod', 'grey', 'crimson'
  ]

  ngOnInit() {
    this.player = this.playerProfileService.player;
  }

  public setColor(color: string) {
    this.player.color = color;
  }
}
