import React from "react";
import Typed from 'react-typed';
import ProfileCard from "./ProfileCard"
import banner from "../images/banner.jpg"
import styles from "./Parallax.module.css"
import { Parallax } from 'react-parallax';

let columnStyle = {
    maxWidth: 800,
    margin: "auto",
    alignItems: "center"
}

const Banner = () => {
    return (
        <Parallax
            strength={-500}
            bgImage={banner}
            bgImageStyle={{
                minWidth: 1000
            }}
        >
            <section className="hero is-fullheight">
            <div className={`hero-body ${styles.inverted}`}>
                <div className={`container`}>
                    <div style = {columnStyle} className="columns">
                          <div style={{display: "flex", justifyContent: "center"}} className={`column is-half`}>
                              <span className="title is-2 is-size-3-mobile">
                                  Welcome, my name is Chiheng Li,<br/>
                                  <Typed
                                      className="title is-3 is-size-4-mobile"
                                      strings={[
                                          'I am a student.',
                                          'I am a developer.',
                                          'and I am a guitarist.']}
                                          typeSpeed={40}
                                          backSpeed={50}
                                          loop={true} >
                                  </Typed>
                              </span>
                          </div>
                          <div className="column">
                                <ProfileCard />
                          </div>
                    </div>
                </div>
            </div>
            </section>
        </Parallax>
)};
export default Banner;
