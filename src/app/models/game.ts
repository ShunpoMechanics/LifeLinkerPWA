export interface Game {
    player1Name: string;
    player2Name: string;
    player3Name: string;
    player4Name: string;
    player5Name: string;
    player6Name: string;

    player1Partners: boolean;
    player1Commander1: string;
    player1Commander2?: string;

    player2Partners: boolean;
    player2Commander1: string;
    player2Commander2?: string;

    player3Partners: boolean;
    player3Commander1: string;
    player3Commander2?: string;

    player4Partners: boolean;
    player4Commander1: string;
    player4Commander2?: string;

    player5Partners: boolean;
    player5Commander1: string;
    player5Commander2?: string;

    player6Partners: boolean;
    player6Commander1: string;
    player6Commander2?: string;

    playerCount: number;
}
