"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropDB = exports.connectDB = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var result = require("dotenv").config();

if (result.error) {
  console.log(result.error);
}

// import dotenv from "dotenv";
// dotenv.config();
var connectDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var connect, options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            options = {
              useNewUrlParser: true,
              // useCreateIndex: true,
              // useFindAndModify: false,
              useUnifiedTopology: true
            };
            _context.t0 = process.env.NODE_ENV;
            _context.next = _context.t0 === "development" ? 5 : _context.t0 === "test" ? 12 : 16;
            break;

          case 5:
            console.log(process.env.DEV_MONGODB_URI);
            console.log(process.env.TEST_MONGODB_URI);
            _context.next = 9;
            return _mongoose["default"].connect(process.env.DEV_MONGODB_URI, options);

          case 9:
            connect = _context.sent;
            console.log(process.env.DEV_MONGODB_URI);
            return _context.abrupt("break", 17);

          case 12:
            _context.next = 14;
            return _mongoose["default"].connect(process.env.TEST_MONGODB_URI, options);

          case 14:
            connect = _context.sent;
            return _context.abrupt("break", 17);

          case 16:
            console.log("Connection did not succeed");

          case 17:
            // connect.then(result =>console.log(result) );
            console.log("connected to MongoDB in ".concat(process.env.NODE_ENV, "  mode on ").concat(connect.connection.host));
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t1 = _context["catch"](0);
            console.log(_context.t1);
            return _context.abrupt("return", _context.t1);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();

exports.connectDB = connectDB;

var dropDB = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var collection;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            for (collection in _mongoose["default"].connect.collections) {
              _mongoose["default"].connection.collections[collection].drop(function () {});
            }

            _context2.next = 7;
            break;

          case 4:
            _context2.prev = 4;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 4]]);
  }));

  return function dropDB() {
    return _ref2.apply(this, arguments);
  };
}();

exports.dropDB = dropDB;
//# sourceMappingURL=db.js.map