import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import burger from "./Navbar.module.css";
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            isActive: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount(){
        // grab an element
        var myElement = document.querySelector(".headroom");
        // construct an instance of Headroom, passing the element
        var headroom  = new window.Headroom(myElement, {
          "offset": 305,
          "tolerance": 5
        });
        // initialise
        headroom.init();
    }

    clickHandler(event){
        this.setState((prev) => {
            return {
                isActive: !prev.isActive
            };
        });
    }

    render(){
        let extra = this.state.isActive ? "is-active" : "";
        return (
            <header className="headroom is-fixed-top">
                <nav className="navbar">
                <div className="navbar-brand">
                  <a className="navbar-item is-size-5">
                    <p style={{fontFamily: "'Roboto', sans-serif", fontWeight: 900}}>Adam's Page</p>
                  </a>
                  <span className={`navbar-burger burger ${extra} ${burger}`} onClick={this.clickHandler} data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <SlideDown style={{width: "100%"}}>
                    <div id="navbarMenuHeroA" className={"navbar-menu " + extra}>
                      <div className="navbar-end has-text-centered">
                        <a href="#" className="navbar-item is-active">
                          Home
                        </a>
                        <a href="#" className="navbar-item">
                          Blog
                        </a>
                        <span className="navbar-item">
                          <a href="https://github.com/lichiheng1998" className="button is-link is-inverted">
                            <span className="icon">
                              <FontAwesomeIcon icon={faGithub} />
                            </span>
                            <span>Github</span>
                          </a>
                        </span>
                      </div>
                    </div>
                    </SlideDown>
                </nav>
            </header>
        )
    }
}

export default Navbar;
