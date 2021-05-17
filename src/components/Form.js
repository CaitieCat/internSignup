import React, {useState} from "react";
import { validate } from 'email-validator';
import "./form.css";
import Submit from './Submit';
import Saving from './Saving';
import ThankYou from './ThankYou';


export default function Form(props){
    const [email, setEmail] = useState("");
    const [state, setState] = useState("unsubmitted");
    const [complete, setComplete] = useState("incomplete");
    const [choice, setChoice] = useState("");

    var validator = require("email-validator");

    function submit(){
        if (!validator.validate(email)){
            setEmail("invalidEmail");
            console.log("Please enter a valid email");
        } else if (choice === ""){
            console.log("Please select an interest");
        } else {
            console.log(email);
            console.log(choice);
            setState("submitted");
            setTimeout(()=>{
                setComplete("completed");
            }, 2000);
        }
    }
    if(complete==="incomplete"){
    return (
        <div className="info">
           <p>Prepare for your career with a Project Management, Web-Development, Graphic Design, or Digital Marketing Internship at Northern.</p>
            {email==="invalidEmail" && <h5 className="error">Please enter a valid email</h5>}
            <div className="form-input">
                <div className="fields">
                <form className="email">
                    <input 
                        placeholder="Your Email Address" 
                        className="emailField" 
                        email="email" 
                        onChange={(event) => setEmail(event.target.value)}>
                    </input>
                </form>
                <div className="selectBox">
                <select 
                className="interests"
                onChange={(event2) => setChoice(event2.target.value)}>
                    <option value="">Your Interests</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                </select>
                </div>
                </div>
            {state === "unsubmitted" && <Submit onClick={submit}></Submit>}
            {state === "submitted" && <Saving></Saving>}
            </div>
        </div>

    )} else {
        return(
            <ThankYou></ThankYou>
        )
    }
}