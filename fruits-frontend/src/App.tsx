import React, { Component } from "react";
import { BrowserRouter, Route  } from "react-router-dom";
import Products from "./Products";
import { connect } from "react-redux";
import Category from "./Category";
import { Redirect } from "react-router";

interface IState{
    selected : string;
}

interface IProps{
    result:any;
    
}

class App extends Component<IProps,IState>{
    
    constructor(props:IProps){
        super(props);
        this.state = {
            selected : ""
        }
        
    }

     selectedValue = (category:any)=>{
            if(category){
                this.setState({
                    selected : category
                })
            }

        }


    render(){
       const { selected } = this.state;
       return(
         <React.Fragment>
             <BrowserRouter>
                  {selected!="" ?(<Redirect to={`/category?type=${selected}`}></Redirect>):(
                  <div className="grid-container">
                      <header className="row">
                          <div>
                              <a href="#" className="brand">Fruits</a>
                          </div>

                           <div>
                           
                               <select onChange={(e)=>{ this.selectedValue(e.target.value) }}>
                                    <option value="">Choose Category</option>
                                     
                                         {this.props.result.map((element:any,index:number)=>(
                                            <option key={index} value={element}>
                                                {element}    
                                            </option>
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
                            <Route path="/category" component={Category} exact={true} strict></Route>
                      </main>

                      <footer className="row center">
                          miniproject@ashokit.in
                      </footer>
                  </div>
                  )}
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