export interface Player {
    position: number;
    life: number;
    commanderDamageFromPlayer1First: number;
    commanderDamageFromPlayer1Second: number;
    commanderDamageFromPlayer2First: number;
    commanderDamageFromPlayer2Second: number;
    commanderDamageFromPlayer3First: number;
    commanderDamageFromPlayer3Second: number;
    commanderDamageFromPlayer4First: number;
    commanderDamageFromPlayer4Second: number;
    commanderDamageFromPlayer5First: number,
    commanderDamageFromPlayer5Second: number,
    commanderDamageFromPlayer6First: number,
    commanderDamageFromPlayer6Second: number,
    infect: number;
    partners: boolean;
}
