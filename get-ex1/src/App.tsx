import React, { Component } from "react";
import axios from "axios";
import { Avatar,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

interface IState{
  res:any;
}

interface IProps{

}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
      this.state = {
          res: []
      }
    }

    componentDidMount(){
        axios.get("http://wsserver-env.eba-8ptwpwzp.ap-south-1.elasticbeanstalk.com/products").then((posRes)=>{
            this.setState({
              res : posRes.data
            })
        },(errRes)=>{
            console.log( errRes );
        })
    };

    render(){
      return(
         <React.Fragment>
            <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell>SNO</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>BRAND</TableCell>
                        <TableCell>PRICE</TableCell>
                        <TableCell>QTY</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Image</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                       {this.state.res.map((element:any,index:any)=>(
                          <TableRow>
                             <TableCell>{index+1}</TableCell>
                             <TableCell>{element.name}</TableCell>
                             <TableCell>{element.brand}</TableCell>
                             <TableCell>{element.price}</TableCell>
                             <TableCell>{element.qty}</TableCell>
                             <TableCell>{element.count}</TableCell>
                             <TableCell>{element.rating}</TableCell>
                             <TableCell>{element.description}</TableCell>
                             <TableCell><Avatar src={element.image}></Avatar></TableCell>
                          </TableRow>
                       ))}
                  </TableBody>
                </Table>
            </TableContainer>
            {/* {JSON.stringify(this.state.res.data)} */}
         </React.Fragment>
      )
    }


};

export default App;