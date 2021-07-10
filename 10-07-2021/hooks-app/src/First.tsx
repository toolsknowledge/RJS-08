import React, { useState } from "react";
import Second from "./Second";

function First(){
    const [data,setData] = useState("Hello");

    const myFun = ()=>{
        setData("Hello, ReactJS");
    };


    return(
        <React.Fragment>
            <Second key1={data}>Welcome</Second>
            <br></br>
            <button onClick={myFun}>Change</button>
        </React.Fragment>
    )


};
export default First;