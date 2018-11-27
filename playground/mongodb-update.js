/**---------------------------------  */
const {MongoClient, ObjectID} = require("mongodb");
/**---------------------------------  */

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if (err) {
       return console.error("unable to connect to mongodb", err);
    }
    console.log("Connected to Mongodb server");

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5bf6a94e857d272075b28487")},
    //     {$set: {completed: true}},
    //     {returnOriginal: false}).then(result=>{
    //         console.log(result);
    //     })
    db.collection("Users").findOneAndUpdate(
        {_id: new ObjectID("5bf66a0144c16529471ee8f1")},
        {$set: {name: "Terrance"},
         $inc: {age: 1}},
        {returnOriginal: false}).then(result => {
        console.log(result);
        
    });
    
    db.close();
});