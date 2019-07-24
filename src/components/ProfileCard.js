import React from "react";
import "./myStyles.css";
import avatar from "../images/avatar.jpg"

const cardStyle = {
    display: "flex", border: "3px solid white", borderRadius: "64px", maxWidth: 400, margin: "0 auto", alignItems: "center"
}


const ProfileCard = () => {
    return (
        <div style={cardStyle}>
            <figure style={{width: 128}} className="image is-centered">
                <img style={{borderRadius: "50%"}} src={avatar} alt="My Avatar"/>
            </figure>
            <div style={{margin: 5, paddingLeft: 10, borderLeft: "1px solid white"}}>
                <div style={{fontSize: "1em"}}>
                    <b>Age: 21</b><br/>
                    <b>Location:</b>
                    <p>297 College Street, ON, Canada</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
