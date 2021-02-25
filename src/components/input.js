import React from "react";


function Input (props){
    return (
<div className="input">
    <input type ="select" name="select">Presidential Election
    <option>  </option> {props.name}

    </input>
    
</div>
    )
}

export default Input 