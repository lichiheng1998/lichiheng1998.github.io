import React from "react";
import Experience from "./Experience";

const Events = (prop) => {
    if (prop.events.length === 0){
        return null;
    }

    let eventComponent = prop.events.map(event => {
        return (
                <Experience event={event}/>
        )
    });

    return (
        (
            <div className="container">
                <br/>
                <div>Experiences:</div>
                <div className="content">
                    <div className="buttons">
                        {eventComponent}
                    </div>
                </div>
            </div>
        )
    );
}

export default Events;
