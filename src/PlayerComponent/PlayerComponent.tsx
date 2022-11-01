import React from "react";
import { formatCurrency } from "../Utils/Utils";
import './PlayerComponent.css'
import { Player } from "./PlayerInterface";
import { isMobile } from 'react-device-detect';


interface PlayerComponentInterface {
    player: Player
    race: String
}

function PlayerComponent({ player, race }: PlayerComponentInterface) {
    let playerAbilities = ""
    for (let ability of player.abilities){
        playerAbilities += ability + ", "
    }

    return (
        <div className={isMobile ? "playerCard-mobile" : "playerCard"}>
            <div className="playerCardInner">
                <div className={"playerCardFront " + (player.RPM ? "rpm" : "")}>
                    <div className="playerTitle">
                        {player.num} - {player.name} - {player.role}
                    </div>
                    <div className={"playerLevel "  + (player.RPM ? "rpm" : "")}>
                        <div>coût: {formatCurrency(player.cost)}</div>
                        <div>level : {player.level}</div>
                        <div>psp : {player.PSP}</div>
                    </div>
                    <div className="playerCarac">
                        <div className="playerCaracHeader">
                            <div>M</div>
                            <div>F</div>
                            <div>AG</div>
                            <div>CP</div>
                            <div>AR</div>
                        </div>
                        <div className="playerCaracHeader">
                            <div>{player.M}</div>
                            <div>{player.F}</div>
                            <div>{player.AG}</div>
                            <div>{player.CP === 0 ? "-" : player.CP + "+"}</div>
                            <div>{player.AR}+</div>
                        </div>
                    </div>
                    <div className="playerAbilities">{playerAbilities}</div>
                    
                    
                </div>
                <div className={"playerCardBack " + race}>
                    <div className="playerStatsHeader">Stats</div>
                    <div className="playerStatsContainer">
                        <div className="playerStatsColumn">
                            <div>REU : {player.REU}</div>
                            <div>ELI : {player.ELI}</div>
                            <div>DET : {player.DET}</div>
                            <div>INT : {player.INT}</div>
                            <div>TD : {player.TD}</div>
                            <div>JDM : {player.JDM}</div>
                            <div className="rpm">{player.RPM ? "Rate le prochain match": ""}</div>
                        </div>
                        <div className="playerStatsHistory">
                            <div></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default PlayerComponent