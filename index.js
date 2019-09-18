var express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/address", () => {
  console.log("connected to mongo db");
});
var app = express();
app.use(express.static("client"));
app.use(require("./server/apis"));
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
