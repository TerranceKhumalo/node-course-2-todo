"use strcit";

const mongoose = require("mongoose");

/**----------------------------------------------------------- */

let User = mongoose.model("Users", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

//EXPORTS
module.exports = {User};