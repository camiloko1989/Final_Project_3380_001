const express = require("express");
const router = express.Router();
const { setComment } = require("../controllers/commentController");

router.route("/").post(setComment);

module.exports = router;
