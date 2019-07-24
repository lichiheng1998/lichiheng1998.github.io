import React from "react";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Title from "./Title";

const Skills = () => {
    return (
        <div className="section">
            <Title title="Skills" />
            <Languages />
            <br/>
            <Frameworks />
            <br/>
        </div>
    );
}

export default Skills;
