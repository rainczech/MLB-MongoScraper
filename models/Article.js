const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
  // title of article
  headline: {
    type: String,
    require: true,
    unique: {index: {unique: true}}
  },
//  link to the article
  url: {
    type: String,
    required: true
  },
// summary
  summary: {
    type: String,
    required: true
  },
  // date
  date: {
    type: Date,
    default: Date.now
  },
  // note
  saved: {
    type: Boolean,
    default: false
  }
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

// Export the Book model
module.exports = Article;
