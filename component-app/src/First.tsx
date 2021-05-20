//import "Component" class
//"Component" class is the predefined class
//"Component" class used to create the "custom components"  Ex. First, Header, Body, Products,......
//"Component" class present in "react" package.
import { Component } from "react";



//state
//component data represeting state
//we will declare state by using interfaces
interface IState{}


//props
//component receiving data from another component called as "props"
//we will declare the props by using interfaces
interface IProps{}



//create component
class First extends Component<IProps,IState>{
    //receive props at booting time
    constructor(props:IProps){
        super(props);
    };

    render(){
        return(
            <h1>Welcome to ReactJS With TypeScript !!!</h1>
        )   
    }

};


//export First Component
export default First;


