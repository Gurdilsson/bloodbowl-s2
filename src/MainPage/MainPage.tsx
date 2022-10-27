import React, { useState } from "react"
import DocumentComponent from "../DocumentComponent/DocumentComponent";
import HomePageComponent from "../HomePageComponent/HomePageComponent";
import PlanningComponent from "../PlanningComponent/PlanningComponent";
import RankingComponent from "../RankingComponent/RankingComponent";
import TeamsComponent from "../TeamComponent/TeamsComponent";
import './mainPage.css';

interface MainPageInterface {
    state: number
}

function MainPage({ state }: MainPageInterface) {

    function renderSwitch(param: number) {
        switch (param) {
            case 1:
                return <TeamsComponent></TeamsComponent>
            case 2:
                return <RankingComponent></RankingComponent>
            case 3:
                return <PlanningComponent></PlanningComponent>
            case 4:
                return <DocumentComponent></DocumentComponent>
            case 5:
                return <div className="advertisement">Arrêtez de cliquer partout MEEEERDE</div>
            default:
                return <HomePageComponent></HomePageComponent>
        }
    }

    return (
        <div className="main-page">
            <div className="title">Ligue de Blood Bowl Thoréfoléenne</div>

            <div className="content">
                {renderSwitch(state)}
            </div>
        </div>
    )
}

export default MainPage