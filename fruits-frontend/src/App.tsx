/*
    1) grid-container
    2) row
    3) brand
    4) center
*/

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
                  <div className="grid-container">
                      <header className="row">
                          <div>
                              <a href="#" className="brand">Fruits</a>
                          </div>

                          <div>
                              <a href="#">cart</a>
                              <a href="#">signin</a>
                          </div>
                      </header>

                      <main>
                            <Route path="/" component={Products} exact={true} strict></Route>
                      </main>

                      <footer className="row center">
                          miniproject@ashokit.in
                      </footer>
                  </div>
             </BrowserRouter>
         </React.Fragment>
       )
    }
};  

export default App;