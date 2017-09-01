"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModuleName = undefined;

var _last = require("ramda/src/last");

var _last2 = _interopRequireDefault(_last);

var _split = require("ramda/src/split");

var _split2 = _interopRequireDefault(_split);

var _head = require("ramda/src/head");

var _head2 = _interopRequireDefault(_head);

var _compose = require("ramda/src/compose");

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getModuleName = exports.getModuleName = (0, _compose2.default)(_head2.default, (0, _split2.default)("."), _last2.default, (0, _split2.default)("/"));