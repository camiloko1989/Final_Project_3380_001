const express = require("express");
const router = express.Router();
const {
  getFacility,
  setFacility,
  deleteFacility,
} = require("../controllers/facilityController");

router.route("/").get(getFacility).post(setFacility);

router.route("/:id").delete(deleteFacility); // put WIP

module.exports = router;
