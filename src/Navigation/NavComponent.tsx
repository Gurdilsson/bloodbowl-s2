import React from "react";
import Pom from '../Images/images.jpg'
import './NavComponent.css'
import logoSite from '../Images/logo-site.png'

interface NavComponentProps {
    changeState: (state: number) => void
    state: number
}

function NavComponent({ changeState, state }: NavComponentProps) {
    return (
        <menu className="nav">
            <img onClick={() => changeState(0)} src={logoSite} alt="" className="logo-site" />
            <div className="menu">
                <div onClick={() => changeState(0)} className="menu-title">Menu</div>
                <div
                    className={"menu-item" + (state === 1 ? " menu-selected" : "")}
                    onClick={() => changeState(1)}>
                    Équipes 🏉
                </div>
                <div className={"menu-item" + (state === 2 ? " menu-selected" : "")}
                    onClick={() => changeState(2)}>
                    Classements 🏆
                    </div>
                <div className={"menu-item" + (state === 3 ? " menu-selected" : "")}
                    onClick={() => changeState(3)}>
                    Planning
                    </div>
                <div className={"menu-item" + (state === 4 ? " menu-selected" : "")}
                    onClick={() => changeState(4)}>
                    Documents
                    </div>
            </div>
            <img src={Pom} className="image" onClick={() => changeState(5)}/>
        </menu>
    )
}

export default NavComponent