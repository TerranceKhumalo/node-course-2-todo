/**---------------------------------  */
const {MongoClient, ObjectID} = require("mongodb");
/**---------------------------------  */

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
    if (err) {
       return console.error("unable to connect to mongodb", err);
    }
    console.log("Connected to Mongodb server");

    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then(result=>{
    //     console.log(result);
        
    // })
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then(result=>{
    //     console.log(result);
        
    // });

    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5bf6764adee0132f5ff26308")
    }).then(result=>{
        console.log(result);
        
    });

    // db.collection("Users").deleteMany({name: "Terrance"}).then(result=>{
    //     console.log(result);
        
    // })
    db.close();
});