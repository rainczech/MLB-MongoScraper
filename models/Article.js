const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
  // title of article
  title: {
    type: String,
    require: true
  },
//  link to the article
  link: {
    type: String,
    required: true
  },
  // note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

// Export the Book model
module.exports = Article;
