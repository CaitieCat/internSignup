import React from "react";
import "./form.css";

export default function Form(props){

    return (
        <div class="info">
            <div class="form-input">
                <form>
                    <input placeholder = {props.inputType} class="email"></input>
                </form>
                <select id="interests">
                    <option>Your Interests</option>
                    <option>Project Management</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Digital Marketing</option>
                </select>
            </div>
            <button>Submit</button>
        </div>

    )
}