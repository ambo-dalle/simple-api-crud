var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var restaurantSchema = new Schema({
  name: String,
  owner: String,
  address: String

});
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
