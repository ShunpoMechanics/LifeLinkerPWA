import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public game: Game = {
    player1Name: '',
    player2Name: '',
    player3Name: '',
    player4Name: '',
    player5Name: '',
    player6Name: '',

    player1Partners: false,
    player2Partners: false,
    player3Partners: false,
    player4Partners: false,
    player5Partners: false,
    player6Partners: false,

    player1Commander1: 'Player 1 Commander 1',
    player2Commander1: 'Player 2 Commander 1',
    player3Commander1: 'Player 3 Commander 1',
    player4Commander1: 'Player 4 Commander 1',
    player5Commander1: 'Player 5 Commander 1',
    player6Commander1: 'Player 6 Commander 1',

    player1Commander2: 'Player 1 Commander 2',
    player2Commander2: 'Player 2 Commander 2',
    player3Commander2: 'Player 3 Commander 2',
    player4Commander2: 'Player 4 Commander 2',
    player5Commander2: 'Player 5 Commander 2',
    player6Commander2: 'Player 6 Commander 2',

    playerCount: 4
  };

  getName(id: number) {
    switch (id)
    {
      case 1:
        return this.game.player1Name;
      case 2:
        return this.game.player2Name;
      case 3:
        return this.game.player3Name;
      case 4:
        return this.game.player4Name;
    }
  }

  setName(id: number, name: string)  {
    switch (id)
    {
      case 1:
        this.game.player1Name = name;
        break;
      case 2:
        this.game.player2Name = name;
        break;
      case 3:
        this.game.player3Name = name;
        break;
      case 4:
        this.game.player4Name = name;
        break;
      case 5:
        this.game.player5Name = name;
        break;
      case 6:
        this.game.player6Name = name;
        break;
    }
  }

  setPartners(id: number) {
    switch (id)
    {
      case 1:
        this.game.player1Partners = !this.game.player1Partners;
        break;
      case 2:
        this.game.player2Partners = !this.game.player2Partners;
        break;
      case 3:
        this.game.player3Partners = !this.game.player3Partners;
        break;
      case 4:
        this.game.player4Partners = !this.game.player4Partners;
        break;
      case 5:
        this.game.player5Partners = !this.game.player5Partners;
        break;
      case 6:
        this.game.player6Partners = !this.game.player6Partners;
        break;
    }
  }
}
