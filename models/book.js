const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {type: String},
  author:[ {type: String}],
  description: {type:String},
  date: { type: Date,
  default: Date.now 
  },
  image: {type:String},
  prevlink :{type:String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;



