import React from "react";
import projectBanner from "../images/projectBanner.jpg";
import { Parallax } from 'react-parallax';

const ProjectBanner = () => {
    return (
        <Parallax
            strength={-800}
            bgImage={projectBanner}
            bgImageStyle={{
                minWidth: 1800
            }}
        >
            <section className="hero is-fullheight">
                <p style={{margin: "auto", color: "white"}} className="is-size-2">Project Showcases</p>
            </section>
        </Parallax>
    );
}

export default ProjectBanner;
