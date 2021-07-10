const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());


const refVariable = mongodb.MongoClient;

app.post("/registration",(req,res)=>{
    refVariable.connect(`mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/rjs-6pm?retryWrites=true&w=majority`,
                            (err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("rjs-6pm");
                db.collection("user_details").insertOne(req.body,(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({insert:"success"});
                    }
                })
            }
    });
});
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started on port no.8080");
});
