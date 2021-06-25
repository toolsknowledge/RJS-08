import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./Products";


interface IState{}

interface IProps{}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
       return(
         <React.Fragment>
             <BrowserRouter>
                <Route path="/" component={Products} exact={true} strict></Route>
             </BrowserRouter>
         </React.Fragment>
       )
    }
};  

export default App;