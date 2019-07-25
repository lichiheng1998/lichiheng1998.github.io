import React from "react";
import "../../mystyles.scss";
import Banner from "../components/Banner.js";
import Navbar from "../components/Navbar.js";
import MyTimeline from "../components/MyTimeline.js";
import Skills from "../components/Skills";
import "./body.css";
import Project from "../components/Project.js";
import ProjectBanner from "../components/ProjectBanner";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

const IndexPage = () => (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chiheng Li's Website</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navbar />
        <Banner />
        <MyTimeline />
        <Skills />
        <ProjectBanner />
        <Project />
        <Footer />
    </div>
);

export default IndexPage;
