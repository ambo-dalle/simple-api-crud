var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var foodSchema = new Schema({
  name: String,
  price: String
});
var Food = mongoose.model('Todo', foodSchema);

module.exports = Food;
