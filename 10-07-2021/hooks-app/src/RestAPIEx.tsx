import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    "table":{
        width:650
    }
});



function RestAPIEx(){
    const [res,setRes] = useState([]);

    const classes = useStyles();


    useEffect(()=>{
        axios.get(`https://www.w3schools.com/angular/customers.php`).then((posRes)=>{
            const { data } = posRes;
            setRes(data.records)
        },(errRes)=>{
            console.log(errRes);
        });
    },[]);

    return(
        <React.Fragment>
             <TableContainer component={Paper}>
                 <Table className={classes.table}>
                     <TableHead>
                         <TableRow>
                             <TableCell>Name</TableCell>
                             <TableCell>City</TableCell>
                             <TableCell>Country</TableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                         {res.map((element:any,index:any)=>(
                            <TableRow key={index}>
                                <TableCell>{element.Name}</TableCell>
                                <TableCell>{element.City}</TableCell>
                                <TableCell>{element.Country}</TableCell>
                            </TableRow> 
                         ))}
                     </TableBody>
                 </Table>
             </TableContainer>
        </React.Fragment>
    )


}

export default RestAPIEx;


