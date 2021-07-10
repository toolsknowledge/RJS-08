import React from "react";

function Second(props:any){
    return(
        <React.Fragment>
            <h1 style={{color:"red"}}>{props.key1}</h1>
            <h1>{props.children}</h1>
        </React.Fragment>        
    )
}

export default Second;