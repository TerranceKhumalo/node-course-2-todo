/**---------------------------------  */
const {MongoClient, ObjectID} = require("mongodb");
/**---------------------------------  */

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if (err) {
       return console.error("unable to connect to mongodb", err);
    }
    console.log("Connected to Mongodb server");

    // db.collection("Todos").find().count().then(count =>{

    //     console.log(`Todos count ${count}`);
    //     console.log(JSON.stringify(count, undefined, 2));
    
    // }, err =>{
    //     console.error("unable to find todos", err);
    // });
    db.collection("Users").find({name: "Mike"}).toArray().then(docs=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, err=>{
        console.error("Unable to find User", err);
        
    });


     db.close();
});