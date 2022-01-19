const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require("dotenv").config();
require("./config/database.js");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/users", require("./routes/api/users"));
app.use(require("./config/auth"));
app.use("/api/listings", require("./routes/api/listings"));
// app.use("/api/orders", require("./routes/api/orders.js"));
// app.use("/api", require("./routes/api/items.js"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
