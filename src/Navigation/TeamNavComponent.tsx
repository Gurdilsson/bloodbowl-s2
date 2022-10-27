import React from "react";
import './TeamNav.css'
import { Team } from "../TeamComponent/TeamInterface";

interface TeamNavComponentInterface {
    teams: Array<Team>
    changeTeam: (team:Team) => void
    actualTeam: Team
}

function TeamNavComponent({teams, changeTeam, actualTeam}:TeamNavComponentInterface) {

    const teamList = teams.map((team) => <div className={"team-button" + (actualTeam===team ? " selected": "")} key={team.name as string} onClick={()=>changeTeam(team)}>{team.acronyme}</div>)
    
    return (
        <div className="team-nav">
            {teamList}
        </div>
    )
}

export default TeamNavComponent