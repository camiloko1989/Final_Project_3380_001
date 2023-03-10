const mongoose = require("mongoose");

const facilitySchema = mongoose.Schema(
  {
    facility: {
      type: String,
      required: [true, "Please add a text value"],
    },
    // category: {
    //   type: String,
    //   required: [true, "Please add a text value"],
    // },
    // phone: {
    //   type: String,
    //   required: [true, "Please add a phone number ###-###-####"],
    // },
    // meals: {
    //   type: String,
    //   required: [true, "Please add a boolean (yes/no)"],
    // },
    // pets: {
    //   type: String,
    //   required: [true, "Please add a boolean (yes/no)"],
    // },
    // carts: {
    //   type: String,
    //   required: [true, "Please add a boolean (yes/no)"],
    // },
    // carts: {
    //   type: String,
    //   required: [true, "Please add a boolean (yes/no)"],
    // },
    // geom: {
    //   type: Object,
    //   required: [true, "Please add a boolean (yes/no)"],
    // },
    // geo_local_area: {
    //   type: String,
    //   required: [true, "Please add a boolean (yes/no)"],
    // },
    // geo_point_2d: {
    //   type: String,
    //   required: [true, "Please add a boolean (yes/no)"],
    // },
  },
  {
    timestamps: true,
    collection: "facility",
  }
);

module.exports = mongoose.model("Facility", facilitySchema);