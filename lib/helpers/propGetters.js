"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argumentsProp = exports.callee = exports.declarations = exports.type = exports.init = exports.id = exports.source = exports.local = exports.specifiers = exports.value = exports.name = undefined;

var _prop = require("ramda/src/prop");

var _prop2 = _interopRequireDefault(_prop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = exports.name = (0, _prop2.default)("name");
var value = exports.value = (0, _prop2.default)("value");

var specifiers = exports.specifiers = (0, _prop2.default)("specifiers");
var local = exports.local = (0, _prop2.default)("local");
var source = exports.source = (0, _prop2.default)("source");

var id = exports.id = (0, _prop2.default)("id");
var init = exports.init = (0, _prop2.default)("init");
var type = exports.type = (0, _prop2.default)("type");
var declarations = exports.declarations = (0, _prop2.default)("declarations");
var callee = exports.callee = (0, _prop2.default)("callee");
var argumentsProp = exports.argumentsProp = (0, _prop2.default)("arguments");