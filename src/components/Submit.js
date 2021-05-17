import React from "react";
import './submit.css';

export default function Submit(props){
    function submit(){
        console.log("submission");
    }
    return (
        <button onClick={submit}>Submit</button>
    )
}