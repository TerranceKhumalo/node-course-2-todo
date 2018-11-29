const mongoose = require("mongoose");
/**------------------------------------- */

mongoose.Promise = global.Promise; //use built in promise library instead of third-party
mongoose.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true });

module.exports = {mongoose};
