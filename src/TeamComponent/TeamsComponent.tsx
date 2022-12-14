import React, { useState } from "react";
import TeamComponent from "./TeamComponent";
import { Team } from "./TeamInterface";
import TeamNavComponent from "../Navigation/TeamNavComponent";
import LMS from '../Images/logo-LMS.png'
import LBG from '../Images/logo-LBG.png'
import MAMA from '../Images/logo-MAMA.png'
import LGA from '../Images/logo-LGA.png'
import SUP from '../Images/logo-SUP.png'
import LKM from '../Images/logo-LKM.png'
import './TeamsComponent.css'
import { isMobile } from 'react-device-detect';
import { getTeams } from "../Utils/Utils";

function TeamsComponent() {
    const [actualTeam, setActualTeam] = useState(0)
    const [teamList] = useState<Team[]>(getTeams())
    const [teamLogos] = useState<string[]>([MAMA, LBG, LMS, LGA, SUP, LKM])

    function changeTeam(team: Team) {
        setActualTeam(teamList.indexOf(team))
    }

    return (
        <>
            {
                isMobile ?
                    <><TeamNavComponent teams={teamList} changeTeam={changeTeam} actualTeam={teamList[actualTeam]}></TeamNavComponent>
                        <div className="teamComponent">
                            <TeamComponent actualTeam={teamList[actualTeam]} actualLogo={teamLogos[actualTeam]}></TeamComponent>
                        </div></>
                    : <>
                        <TeamNavComponent teams={teamList} changeTeam={changeTeam} actualTeam={teamList[actualTeam]}></TeamNavComponent>
                        <TeamComponent actualTeam={teamList[actualTeam]} actualLogo={teamLogos[actualTeam]}></TeamComponent>
                    </>
            }

        </>
    )
}

export default TeamsComponent