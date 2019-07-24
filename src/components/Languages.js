import React from 'react';
import styles from "./Planguages.module.css";
import RollingCard from "./RollingCard";
import languages from "../models/languages";
import Slider from "react-slick";

class Languages extends React.Component {
    constructor(){
        super();
        this.responsive = [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 6
              }
            }
        ];
        this.settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            responsive: this.responsive,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 2000,
        }
    }

    componentDidMount(){
    }

    render(){
        let component = Object.keys(languages).map((lang)=>{
            return (
                <RollingCard key={lang} name={lang} num={languages[lang].proficiency} imgUrl={require(`../images/${lang}.png`)} />
            );
        });
        return (
                <div className={styles.wrapper}>
                    <Slider {...this.settings}>
                          {component}
                    </Slider>
                </div>
        );
    }
}


export default Languages;
