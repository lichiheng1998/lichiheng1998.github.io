import React from "react";
import Stars from "./Stars";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { responsiveIcon } from "./Planguages.module.css";
const DevEnv = (props) => {

    let bodyStyle = {
        height: "100%",
        position: "relative",
        backgroundColor: "white",
    }

    let titleStyle = {
        borderBottom: "1px solid"
    }

    let component = Object.keys(props.data).map((name) => {
        return (
            <div key={name}>{name}: <Stars isSpin={false} num={props.data[name].proficiency} /></div>
        );
    });

    return (
        <div style={bodyStyle} className={"notification"}>
            <p style={titleStyle} className="subtitle">{props.title}</p>
                {component}
            <br />
            <div style={{position: "absolute", bottom: 20, right: 40}}>
                <FontAwesomeIcon className={responsiveIcon} icon={props.icon}/>
            </div>
        </div>
    );
}

export default DevEnv;
