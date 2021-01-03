"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _db = require("./config/db");

var app = (0, _express["default"])();

_dotenv["default"].config(); // app.use(cors());


app.use(_express["default"].json()); // connect to MongoDB database

(0, _db.connectDB)(); // Home Page

app.get("/", function (req, res) {
  res.send("Welcome to the home page");
});
var PORT = process.env.PORT || 6000;
app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT, " \uD83D\uDD25"));
});
//# sourceMappingURL=server.js.map