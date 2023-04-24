import React from "react";

function EyesOnMe(){
    function handleFocus(event){
         console.log("Good!")
    }
    function handleBlure(event){
         console.log("Hey! Eyes on me!")
    }
    return(
        <button onFocus={handleFocus} onBlur={handleBlure}>Eyes on me</button>
    );
}

export default EyesOnMe;