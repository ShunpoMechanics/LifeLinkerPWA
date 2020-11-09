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
    infect: number;
    partners: boolean;
}
