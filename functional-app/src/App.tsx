import React, { useState } from "react";

function App(){
    const [subone,setSubone] = useState("ReactJS");
    const [subtwo,setSubtwo] = useState("NodeJS");
    const [subthree,setSubthree] = useState("MongoDB");

    const myFun = ()=>{
        setSubone("ReactJS With TypeScript");
        setSubtwo("Deno");
        setSubthree("CassandraDB");
    };



    return(
       <React.Fragment>
          {subone}....{subtwo}....{subthree}
          <br></br>
          <button onClick={myFun}>ClickMe</button>
       </React.Fragment>
    )
}

export default App;