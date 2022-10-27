import React from "react";
import './SideComponent.css'
import Blitzers from '../Images/Blitzers.png'

function SideComponent() {
    return (
        <div className="side-component">
            <div className="plop"></div>
            <img src={Blitzers} className="image-blitzers" />
        </div>
    )
}

export default SideComponent