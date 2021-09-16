import React from "react";
import './works.scss';

function Data(props){
    return(
        <div className="data">
            <img src = {props.image} alt="logo of website" title="website preview" />
            <div className="info">
            <p>{props.title}
            <br />
            <span>{props.lang}</span>
            <br />
            <a href={props.link} target="_blank" rel="noreferrer">{props.link}</a>
            </p>
            </div>
        </div>
    )
}

export default Data;