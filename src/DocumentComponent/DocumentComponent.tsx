import React from "react";
import Cheer from '../Images/CheerleaderOnBall.jpg'

function DocumentComponent() {
    return (
        <div>
            <div>Documents</div>
            <div className="advertisement">Bon voilà une image d'Amazone sur un ballon vous êtes contents ? Dégagez maintenant !!</div>
            <div className="cheerContainer">
                <img className="cheer" src={Cheer} alt="" />
            </div>
        </div>
    )
}

export default DocumentComponent