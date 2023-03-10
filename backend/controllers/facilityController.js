// use err handler instead of try catches for async
const asyncHandler = require("express-async-handler");
const Facility = require("../models/facilityModel");
const Comment = require("../models/commentModel");

// @desc    Get all facility
// @route   GET /api/facility
// @access  Public
const getFacility = asyncHandler(async (req, res) => {
  const facility = await Facility.find({});
  res.status(200).json(facility);
});

// @desc    Set facility
// @route   POST /api/facility
// @access  Public
const setFacility = asyncHandler(async (req, res) => {
  if (!req.body.facility) {
    // need to add back other fields after testing
    // res.status(400).json({ message: "Please add a text field" }); // bad req
    res.status(400);
    // express error handler
    throw new Error("Please add a facility field");
  }

  const facility = await Facility.create({
    facility: req.body.facility,
  });
  res.status(200).json(facility);
});

// @desc    Update facility (WIP)
// @route   PUT /api/facility/:id
// @access  Private

// @desc    Delete facility (WIP)
// @route   DELETE /api/facility/:id
// @access  Private
const deleteFacility = asyncHandler(async (req, res) => {
  const facility = await Facility.findById(req.params.id);
  if (!facility) {
    res.status(400);
    throw new Error("Facility not found");
  }

  await facility.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getFacility,
  setFacility,
  deleteFacility,
};
