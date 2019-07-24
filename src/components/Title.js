import React from "react";
const titleStyle = {
    fontWeight: 500,
    color: "#3273dc",
    margin: "0 5% 50px 5%"
}

const Title = (props) => {
    return (
        <p className="title" style={titleStyle}>{props.title}:</p>
    )
}

export default Title;
