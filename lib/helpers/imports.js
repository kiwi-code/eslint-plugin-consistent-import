"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSourceValue = exports.getImportType = exports.getImportName = exports.doesNotHaveImportSpecifier = exports.hasImportSpecifier = undefined;

var _allPass = require("ramda/src/allPass");

var _allPass2 = _interopRequireDefault(_allPass);

var _isNil = require("ramda/src/isNil");

var _isNil2 = _interopRequireDefault(_isNil);

var _isEmpty = require("ramda/src/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _complement = require("ramda/src/complement");

var _complement2 = _interopRequireDefault(_complement);

var _head = require("ramda/src/head");

var _head2 = _interopRequireDefault(_head);

var _compose = require("ramda/src/compose");

var _compose2 = _interopRequireDefault(_compose);

var _propGetters = require("./propGetters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFirstSpecifier = (0, _compose2.default)(_head2.default, _propGetters.specifiers);
var isNotEmpty = (0, _complement2.default)(_isEmpty2.default);
var isDefined = (0, _complement2.default)(_isNil2.default);

var hasImportSpecifier = exports.hasImportSpecifier = (0, _compose2.default)((0, _allPass2.default)([isDefined, isNotEmpty]), getFirstSpecifier);
var doesNotHaveImportSpecifier = exports.doesNotHaveImportSpecifier = (0, _complement2.default)(hasImportSpecifier);

var getImportName = exports.getImportName = (0, _compose2.default)(_propGetters.name, _propGetters.local, getFirstSpecifier);
var getImportType = exports.getImportType = (0, _compose2.default)(_propGetters.type, getFirstSpecifier);
var getSourceValue = exports.getSourceValue = (0, _compose2.default)(_propGetters.value, _propGetters.source);