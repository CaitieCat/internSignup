import React, {useState} from "react";
import "./form.css";
import Submit from './Submit';
import Saving from './Saving';
import ThankYou from './ThankYou';

export default function Form(props){
    const [email, setEmail] = useState("");
    const [state, setState] = useState("unsubmitted");
    const [complete, setComplete] = useState("incomplete");

    function submit(){
        if (email === ""){
            console.log("Please enter a valid email");
        } else {
            console.log(email);
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
            <div className="form-input">
                <div className="fields">
                <form>
                    <input 
                        placeholder="Your Email Address" 
                        className="email" 
                        email="email" 
                        onChange={(event) => setEmail(event.target.value)}>
                    </input>
                </form>
                <select id="interests">
                    <option>Your Interests</option>
                    <option>Project Management</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Digital Marketing</option>
                </select>
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