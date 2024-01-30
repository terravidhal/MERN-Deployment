const mongoose = require('mongoose');
 

const AuthorSchema = new mongoose.Schema(
 {
    name: {
      type: String,
      required: [true, "A author name is required"],
      minlength: [3, "A author name must be atleast three characters long"]
    }
  }, 
  {timestamps: true}
);


 
const Author = mongoose.model('Author', AuthorSchema);
 
module.exports = Author;