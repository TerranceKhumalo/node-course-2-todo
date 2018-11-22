/**---------------------------------  */
const {MongoClient, ObjectID} = require("mongodb");
/**---------------------------------  */

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if (err) {
       return console.error("unable to connect to mongodb", err);
    }
    console.log("Connected to Mongodb server");

    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result)=>{ 
    //     if(err){
    //         return console.error("Unable to insert todos", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
        
    // })
    // db.collection("Users").insertOne({
    //     name: "Terrance",
    //     age: 26,
    //     loaction: "Roodepoort"
    // }, (err, result)=>{

    //     if(err){
    //         return console.error("Unable to insert Todos", err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});