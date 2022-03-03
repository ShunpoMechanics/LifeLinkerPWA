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

  ngOnInit() {
    this.player = this.playerProfileService.player;
    console.log(this.player.color);
  }

  public setColor(color: string) {
    this.player.color = color;
  }
}
