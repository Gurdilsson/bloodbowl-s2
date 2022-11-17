import React, { useState } from "react";
import { Team } from "../TeamComponent/TeamInterface";
import { getTeams } from "../Utils/Utils";
import './RankingComponent.css'
import CUP from '../Images/Trophy.png'
import BALL from '../Images/Ball.png'
import Blessures from '../Images/Blessures.png'
import Eliminations from '../Images/Eliminations.png'
import Interceptions from '../Images/Interceptions.png'
import Levels from '../Images/Levels.png'
import Passes from '../Images/Passes.png'
import TouchDowns from '../Images/TouchDowns.png'
import { Player } from "../PlayerComponent/PlayerInterface";

interface teamInfosInterface {
    team: Team
    ELI: number
    REU: number
    BP: number
    INT: number
    PTS: number
    TD: number
}

interface playerInfosInterface {
    team: Team
    player: Player
}

function RankingComponent() {
    const [teamList] = useState<teamInfosInterface[]>(loadTeamsInfos())
    const [teamFilter, setTeamFilter] = useState(0)
    const [playerFilter, setPLayerFilter] = useState(0)

    function loadTeamsInfos() {
        let teamsInfoList = []
        for (let team of getTeams()) {
            let ELI = 0
            let REU = 0
            let BP = 0
            let INT = 0
            let PTS = team.championchipPoints
            let TD = 0
            for (let player of team.players) {
                ELI += player.ELI
                REU += player.REU
                BP += player.BP
                INT += player.INT
                TD += player.TD
            }
            teamsInfoList.push({ "team": team, "ELI": ELI, "REU": REU, "BP": BP, "INT": INT, "PTS": PTS, "TD": TD })
        }
        return teamsInfoList
    }

    function getTeamRanking() {
        switch (teamFilter) {
            case 0:
                return teamList
                    .sort((a, b) => b.PTS - a.PTS)
                    .map((teamInfos) =>
                        <div
                            className={"ranked-team " + teamInfos.team.race}
                            key={teamInfos.team.name as string}
                        >
                            {teamInfos.team.name + " " + teamInfos.PTS + " pts"}
                        </div>)
            case 1:
                return teamList
                    .sort((a, b) => b.ELI - a.ELI)
                    .map((teamInfos) =>
                        <div
                            className={"ranked-team " + teamInfos.team.race}
                            key={teamInfos.team.name as string}
                        >
                            {teamInfos.team.name + " " + teamInfos.ELI + " éliminations"}
                        </div>)
            case 2:
                return teamList
                    .sort((a, b) => b.INT - a.INT)
                    .map((teamInfos) =>
                        <div
                            className={"ranked-team " + teamInfos.team.race}
                            key={teamInfos.team.name as string}
                        >
                            {teamInfos.team.name + " " + teamInfos.INT + " interceptions"}
                        </div>)
            case 3:
                return teamList
                    .sort((a, b) => b.REU - a.REU)
                    .map((teamInfos) =>
                        <div
                            className={"ranked-team " + teamInfos.team.race}
                            key={teamInfos.team.name as string}
                        >
                            {teamInfos.team.name + " " + teamInfos.REU + " passes"}
                        </div>)

            case 4:
                return teamList
                    .sort((a, b) => b.TD - a.TD)
                    .map((teamInfos) =>
                        <div
                            className={"ranked-team " + teamInfos.team.race}
                            key={teamInfos.team.name as string}
                        >
                            {teamInfos.team.name + " " + teamInfos.TD + " touchdowns"}
                        </div>)

            case 5:
                return teamList
                    .sort((a, b) => b.BP - a.BP)
                    .map((teamInfos) =>
                        <div
                            className={"ranked-team " + teamInfos.team.race}
                            key={teamInfos.team.name as string}
                        >
                            {teamInfos.team.name + " " + teamInfos.BP + " blessures persistantes"}
                        </div>)

            default:
                break;
        }
    }

    let playerList: playerInfosInterface[] = []
    for (let teamInfos of teamList) {
        for (let player of teamInfos.team.players) {
            playerList.push({ "team": teamInfos.team, "player": player })
        }
    }

    function getPlayerRanking() {
        switch (playerFilter) {
            case 0:
                return playerList
                    .sort((a, b) => b.player.level - a.player.level)
                    .slice(0, 5)
                    .map((playerInfo) =>
                        <div key={playerInfo.player.name as string} className={"ranked-team " + playerInfo.team.race}>
                            {playerInfo.player.name + " (" + playerInfo.player.role + ") : " + playerInfo.player.level}
                        </div>)
            case 1:
                return playerList
                    .sort((a, b) => b.player.ELI - a.player.ELI)
                    .slice(0, 5)
                    .map((playerInfo) =>
                        <div key={playerInfo.player.name as string} className={"ranked-team " + playerInfo.team.race}>
                            {playerInfo.player.name + " (" + playerInfo.player.role + ") : " + playerInfo.player.ELI}
                        </div>)
            case 2:
                return playerList
                    .sort((a, b) => b.player.INT - a.player.INT)
                    .slice(0, 5)
                    .map((playerInfo) =>
                        <div key={playerInfo.player.name as string} className={"ranked-team " + playerInfo.team.race}>
                            {playerInfo.player.name + " (" + playerInfo.player.role + ") : " + playerInfo.player.INT}
                        </div>)

            case 3:
                return playerList
                    .sort((a, b) => b.player.REU - a.player.REU)
                    .slice(0, 5)
                    .map((playerInfo) =>
                        <div key={playerInfo.player.name as string} className={"ranked-team " + playerInfo.team.race}>
                            {playerInfo.player.name + " (" + playerInfo.player.role + ") : " + playerInfo.player.REU}
                        </div>)
            case 4:
                return playerList
                    .sort((a, b) => b.player.TD - a.player.TD)
                    .slice(0, 5)
                    .map((playerInfo) =>
                        <div key={playerInfo.player.name as string} className={"ranked-team " + playerInfo.team.race}>
                            {playerInfo.player.name + " (" + playerInfo.player.role + ") : " + playerInfo.player.TD}
                        </div>)
            case 5:
                return playerList
                    .sort((a, b) => (b.player.BP * 1000 + b.player.PSP) - (a.player.BP * 1000 + b.player.PSP))
                    .slice(0, 5)
                    .map((playerInfo) =>
                        <div key={playerInfo.player.name as string} className={"ranked-team " + playerInfo.team.race}>
                            {playerInfo.player.name + " (" + playerInfo.player.role + ") : " + playerInfo.player.BP}
                        </div>)

            default:
                break;
        }
    }

    return (

        <>
            <div className="ranking-title">Classement global</div>
            <div className="team-ranking-container">
                <div className="ranking-icons">
                    <img src={Blessures} alt="Blessures" className="ranking-icon" onClick={() => setTeamFilter(5)} />
                    <img src={Eliminations} alt="Eliminations" className="ranking-icon" onClick={() => setTeamFilter(1)} />
                    <img src={Interceptions} alt="Interceptions" className="ranking-icon" onClick={() => setTeamFilter(2)} />
                    <img src={Levels} alt="Levels" className="ranking-icon" onClick={() => setTeamFilter(0)} />
                    <img src={Passes} alt="Passes" className="ranking-icon" onClick={() => setTeamFilter(3)} />
                    <img src={TouchDowns} alt="TouchDowns" className="ranking-icon" onClick={() => setTeamFilter(4)} />
                </div>

                <div className="team-ranking">
                    {getTeamRanking()}
                </div>

                <img src={CUP} className="ranking-cup" alt="Blood Bowl trophy" />
            </div>
            <div className="ranking-separator"></div>

            <div className="ranking-title">Classement par joueur</div>
            <div className="player-ranking-container">
                <div className="ranking-ball-container">
                    <img src={BALL} className="ranking-ball" alt="Blood Bowl ball" />
                </div>
                <div className="ranking-players">
                    {getPlayerRanking()}
                </div>
                <div className="ranking-icons">
                    <img src={Blessures} alt="Blessures" className="ranking-icon" onClick={() => setPLayerFilter(5)} />
                    <img src={Eliminations} alt="Eliminations" className="ranking-icon" onClick={() => setPLayerFilter(1)} />
                    <img src={Interceptions} alt="Interceptions" className="ranking-icon" onClick={() => setPLayerFilter(2)} />
                    <img src={Levels} alt="Levels" className="ranking-icon" onClick={() => setPLayerFilter(0)} />
                    <img src={Passes} alt="Passes" className="ranking-icon" onClick={() => setPLayerFilter(3)} />
                    <img src={TouchDowns} alt="TouchDowns" className="ranking-icon" onClick={() => setPLayerFilter(4)} />
                </div>
            </div>


        </>


    )
}

export default RankingComponent