//nodejs
//javascript
//import the modules
//require() function, used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");



//create the rest object
const app = express();
//where "app" is the rest object
//where "app" used to build the rest services
//GET,POST,PUT,DELETE,........


//set the JSON as MIME Type
app.use(bodyparser.json());



//read the url encoded data
app.use(bodyparser.urlencoded({extended:false}));


//enable the cors policy
app.use( cors() );


//create the "reference" to connect to "database"
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable, used to connect to mongodb database


//create the GET Request
app.get("/products",(req,res)=>{
    //tokens comparision
    //middleware
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.gb2ri.mongodb.net/miniproject?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("miniproject");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});


//assign the port number
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server ready");
});
