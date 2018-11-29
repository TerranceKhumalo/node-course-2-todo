"use strcit";

const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
let {Todo} = require("./models/todo");
let {User} = require("./models/user");
/**------------------------------------- */
 const PORT = 3000;
/**------------------------------------- */

let app = express();
//middle ware to use on express
app.use(bodyParser.json());

app.post("/todos", (req, res)=>{
    
    console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then(doc =>{
            res.send(doc);
        })
        .catch(e =>{
            res.status(400).send(e);
        });
    
});


app.listen(PORT, ()=>{
    console.log("Started on port 3000");
});

module.exports = {app};