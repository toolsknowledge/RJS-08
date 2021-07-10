import React, { useState } from "react";

function App(){
    const [var_one,setVarOne] = useState("Hello_1");
    const [var_two,setVarTwo] = useState("Hello_2");
    const [var_three,setVarThree] = useState("Hello_3");

    const chageState = ()=>{
      setVarOne("Welcome_1");
      setVarTwo("Welcome_2");
      setVarThree("Welcome_3");
    };


    return(
        <React.Fragment>
            <h1>{var_one}</h1>
            <h1>{var_two}</h1>
            <h1>{var_three}</h1>
            <button onClick={chageState}>Change</button>
        </React.Fragment>
    )

};

export default App;