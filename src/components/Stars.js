import React from "react";
import {faStar as eStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as star, faStarHalfAlt as halfStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Stars.module.css";

const Stars = (props) => {
    let z = Math.floor(props.num);
    let extra = 5 - Math.ceil(props.num);
    let isHalf = props.num - z !== 0;
    let component = [];
    for(; z > 0; z--){
        component.push(
            <FontAwesomeIcon style={{maxWidth: 50}} spin={props.isSpin} className={styles.star} key={z} icon={star}/>
        );
    }
    if(isHalf){
        component.push(
            <FontAwesomeIcon style={{maxWidth: 50}} className={styles.star} key={z} icon={halfStar}/>
        );
    }
    for(let i = 0; i < extra; i++){
        component.push(
            <FontAwesomeIcon style={{maxWidth: 50}} className={styles.star} key={z - i - 1} icon={eStar}/>
        );
    }
    return component;
}

export default Stars;
