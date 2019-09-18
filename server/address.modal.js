const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const zipSchema = new Schema({
  zip: String,
  state: String,
  city: String,
  fullState: String
});
module.exports = mongoose.model("zipcode", zipSchema);
