const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// let id = "5c0109f05b569a26e34d58d411";
let id = "5bfd06a768c18f2572399baf";

// if(!ObjectID.isValid(id)){
//     console.log("ID Not vaild");
// }



// Todo.find({
//     _id: id
// }).then(todos=>console.log("Todos", todos));

// Todo.findOne({
//     _id: id
// }).then(todo=> console.log("Todo", todo));

// Todo.findById(id)
//     .then(todo=>{
//         if(!todo)
//             return console.log("ID not found");
            
//         console.log("Todo find by ID", todo)
//     })
//     .catch(e=>console.error(e)); 

User.findById(id)
    .then(user=>{
        if(!user){
            return console.log("Unable to find user");
        }
        console.log("this is user", user)
    })
    .catch(e=>console.error("Error cannot compute", e));