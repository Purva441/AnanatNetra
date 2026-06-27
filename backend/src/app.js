const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const v1Routes = require("./routes/v1");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const { sendSuccess } = require("./utils/apiResponse");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  sendSuccess(res, "AnanatNetra backend is running", {
    version: "v1",
  });
});

app.use("/api/v1", v1Routes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
