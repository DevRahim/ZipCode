const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  zip: String,
  state: String,
  city: String,
  fullState: String
});
module.exports = mongoose.model("address", addressSchema);
