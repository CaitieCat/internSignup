import React from "react";
import './submit.css';

export default function Submit(props){
    return (
        <button onClick={props.onClick}>Submit</button>
    )
}