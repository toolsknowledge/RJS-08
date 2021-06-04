//nodejs
//javascript

//import the modules
//@express      @cors       @mongodb        @body-parser
//require() function, used to import the modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const bodyparser = require("body-parser");


//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object, used to develop the rest services



//enable the cors policy
app.use(cors());


//set the json as MIME type
app.use(bodyparser.json());



//read the json data
app.use(bodyparser.urlencoded({extended:false}));


//create the reference variable to connect to mongodb database
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable
//where "ashokIT" used to connect to mongodb database


//create the post request
app.post("/login",(req,res)=>{
     ashokIT.connect("mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/R08?retryWrites=true&w=majority",
                            (err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("R08");
                db.collection("login_details").find({"username":req.body.username,"password":req.body.password})
                    .toArray((err,array)=>{
                        if(err) throw err;
                        else{
                            if(array.length>0){
                                res.send({"login":"success"});
                            }else{
                                res.send({"login":"fail"});
                            }
                        }
                });
            }
     })
});


//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});
