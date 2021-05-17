import React, {useState} from "react";
import "./form.css";
import Submit from './Submit';

export default function Form(props){
    const [email, setEmail] = useState("");
    const [state, setState] = useState("unsubmitted");

    function submit(){
        if (email === ""){
            console.log("Please enter a valid email");
        }
        console.log(email);
    }

    return (
        <div class="info">
            <div class="form-input">
                <form>
                    <input 
                        placeholder="Your Email Address" 
                        class="email" email="email" 
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
            <Submit onClick={submit}></Submit>
        </div>

    )
}