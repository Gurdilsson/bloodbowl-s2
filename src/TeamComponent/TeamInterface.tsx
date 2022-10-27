import { Player } from "../PlayerComponent/PlayerInterface"

export interface Team {
    name: String
    acronyme: String
    race: String
    coachName: String
    rerolls: number
    rerollCost: number
    cheerleaders: number
    assistantCoach: number
    fans: number
    apothecary: boolean,
    golds: number
    championchipPoints: number
    players: Array<Player>
    
}