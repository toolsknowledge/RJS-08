import React from "react";
import { useRef } from "react";

function UseRefEx(){

    const uname = useRef<HTMLInputElement>(null);

    const myFun = ()=>{
        console.log( uname.current?.value );
    };


    return(
        <React.Fragment>
            <input type="text" ref={uname}></input>
            <button onClick={myFun}>Click Me</button>
        </React.Fragment>
    )
}

export default UseRefEx;