const router = require("express").Router(); // get an instance of the express Router
const address = require("./address.modal");
const zipcodes = require("zipcodes");
router.get("/getCountries", (req, res) => {
  res.json(["US"]);
});
router.get("/getStates/:country", async (req, res) => {
  let states = await address.find().distinct("fullState");
  res.json(states);
});
router.get("/getCities/:country/:state", async (req, res) => {
  let cities = await address
    .find({ fullState: req.params.state })
    .distinct("city");
  res.json(cities);
});
router.get("/getZipCode/:country/:state/:city", async (req, res) => {
  let addressData = await address
    .findOne({ fullState: req.params.state, city: req.params.city })
    .select("zip");
  res.json(addressData.zip);
});
router.get("/getAddress/:zipcode", async (req, res) => {
  let addressData = await zipcodes.lookup(req.params.zipcode);
  res.json(addressData);
});
module.exports = router;
