const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
// error handler WIP

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/facility", require("./routes/facilityRoutes"));
app.use("/api/comment", require("./routes/commentRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
