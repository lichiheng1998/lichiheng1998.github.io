import React from "react";
import Zoom from 'react-reveal/Zoom';
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
                <Zoom clear>
                    <p style={{margin: "auto", color: "white"}} className="is-size-2">Project Showcases</p>
                </Zoom>
            </section>
        </Parallax>
    );
}

export default ProjectBanner;
