import React, { Component } from "react";
import { BrowserRouter, Route,NavLink,Redirect } from "react-router-dom";
import Products from "./Products";
import { connect } from "react-redux";
import Category from "./Category";
import { History, LocationState } from "history";


interface IState{}

interface IProps{
    result:any;
    //history:History<LocationState>; 
}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

     selectedValue = (category:any)=>{
            console.log(category);
            //return (<Redirect to="/category"></Redirect>)
            //return window.location.href=`/category`;
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
                               <select onChange={(e)=>{this.selectedValue(e.target.value)}}>
                                    <option value="">Choose Category</option>
                                     {this.props.result.map((element:any,index:number)=>(
                                        <option key={index}>{element}</option>
                                     ))}
                               </select>
                           </div>
                          <div>
                              <a href="#">cart</a>
                              <a href="#">signin</a>
                          </div>
                      </header>

                      <main>
                            <Route path="/" component={Products} exact={true} strict></Route>
                            <Route path="/category/:category" component={Category} exact={true} strict></Route>
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


const receive = (state:any)=>{
    const arr:any[] = [];
    state.products.products.forEach((element:any,index:number)=>{
        arr.push(element.category)
    })
    const arr1 = [...new Set(arr)]
    return{
        result : arr1
    }
};


const send = (dispatch:any)=>{
    return{

    }
}

export default connect(receive,send)(App);