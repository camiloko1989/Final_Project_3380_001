const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    facility: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "FacilityId",
    },
    user: {
      type: String,
      required: [true, "Please add a text value"],
    },
    comment: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
    collection: "comment",
  }
);

module.exports = mongoose.model("Comment", commentSchema);
