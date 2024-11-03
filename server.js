require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const indexRoutes = require("./routes");
const docsRouter = require("./routes/docRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan("dev"));

app.use("/api/v1/", indexRoutes);
app.use("/api-docs", docsRouter);

module.exports = app;