const router = require("express").Router(); // get an instance of the express Router
const address = require("./address.modal");
router.get("/getCountries", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
router.get("/getStates/:country", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
router.get("/getCities/:country/:state", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
router.get("/getZipCode/:country/:state/:zipcode", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
router.get("/getAddress/:zipcode", (req, res) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
module.exports = router;
