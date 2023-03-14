// use err handler instead of try catches for async
const asyncHandler = require("express-async-handler");
const Facility = require("../models/facilityModel");
const Comment = require("../models/commentModel");

// @desc    Set comment
// @route   POST /api/comment
// @access  Public
const setComment = asyncHandler(async (req, res) => {
  if (!req.body.facility) {
    res.status(400);
    // express error handler
    throw new Error("Please add a facility field (id)");
  }

  if (!req.body.user) {
    res.status(400);
    // express error handler
    throw new Error("Please add a user field");
  }

  if (!req.body.comment) {
    res.status(400);
    // express error handler
    throw new Error("Please add a comment field");
  }

  const comment = await Comment.create({
    facility: req.body.facility,
    user: req.body.user,
    comment: req.body.comment,
  });
  res.status(200).json(comment);
});

module.exports = {
  setComment,
};
