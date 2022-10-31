import React from "react";
import { Team } from "./TeamInterface";
import './TeamComponent.css'
import '../PlayerComponent/PlayerComponent.css'
import PlayerComponent from "../PlayerComponent/PlayerComponent";
import { formatCurrency } from "../Utils/Utils";

interface TeamComponentInterface {
    actualTeam: Team
    actualLogo: string
}

function TeamComponent({ actualTeam, actualLogo }: TeamComponentInterface) {

    const playerList = actualTeam.players.map((player) => <PlayerComponent key={player.name as string} player={player} race={actualTeam.race}></PlayerComponent>)

    var playersValue = 0
    var validPlayersValue = 0
    actualTeam.players.forEach(player => { playersValue += player.cost; validPlayersValue += player.RPM ? 0 : player.cost })

    const teamValue = (
        actualTeam.rerollCost * actualTeam.rerolls
        + 10000 * (actualTeam.cheerleaders + actualTeam.assistantCoach)
        + (actualTeam.apothecary ? 50000 : 0))
        + playersValue

    const actualTeamValue = (
        actualTeam.rerollCost * actualTeam.rerolls
        + 10000 * (actualTeam.cheerleaders + actualTeam.assistantCoach)
        + (actualTeam.apothecary ? 50000 : 0))
        + validPlayersValue

    return (
        <>
            <div className="team-name">{actualTeam.name}</div>
            <div className={"team-infos " + actualTeam.race}>
                <div>
                    <div>Coach : {actualTeam.coachName}</div>
                    <div>Points de ligue : {actualTeam.championchipPoints}</div>
                    <div>Cheerleaders : {actualTeam.cheerleaders}</div>
                    <div>Assistants coachs: {actualTeam.assistantCoach}</div>
                    <div>Valeur d'équipe : {formatCurrency(teamValue)}</div>
                    <div>Valeur d'équipe actuelle : {formatCurrency(actualTeamValue)}</div>
                    <div>Fans : {actualTeam.fans}</div>
                    <div>Trésorerie : {formatCurrency(actualTeam.golds)}</div>
                    <div>Relances d'équipe : {actualTeam.rerolls}</div>
                </div>
                <img src={actualLogo} alt="logo" className="team-logo" />

            </div>

            {/* <div className="player-list">
                <div className="headerLine">
                    <div className="playerNum">N°</div>
                    <div className="playerName">Nom</div>
                    <div className="playerRole">Poste</div>
                    <div className="playerMovement">M</div>
                    <div className="playerStrenght">F</div>
                    <div className="playerAgility">AG</div>
                    <div className="playerPass">CP</div>
                    <div className="playerArmor">AR</div>
                    <div className="playerXp">RPM</div>
                    <div className="playerXp">BP</div>
                    <div className="playerXp">REU</div>
                    <div className="playerXp">ELI</div>
                    <div className="playerXp">DET</div>
                    <div className="playerXp">INT</div>
                    <div className="playerXp">TD</div>
                    <div className="playerXp">JDM</div>
                    <div className="playerLevel">Lvl</div>
                    <div className="playerPoints">SPP</div>
                    <div className="playerCost">Coût</div>
                </div>
                {playerList}
            </div> */}
            <div className="playerCards">
                {playerList}
            </div>
        </>
    )
}

export default TeamComponent