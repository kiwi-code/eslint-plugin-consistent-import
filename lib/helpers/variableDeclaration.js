"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRequreJSStatement = exports.getFirstCalleeArgument = exports.getVariableDeclarationName = undefined;

var _propGetters = require("./propGetters");

var R = require("ramda");

var getDeclaration = R.compose(R.head, _propGetters.declarations);
var getVariableDeclarationInit = R.compose(R.pathOr({}, ["init"]), getDeclaration);
var getVariableDeclarationInitType = R.compose(R.pathOr({}, ["type"]), getVariableDeclarationInit);
var isVariableDeclarationTypeEqual = function isVariableDeclarationTypeEqual(x) {
  return R.compose(R.equals(x), getVariableDeclarationInitType);
};
var isVariableDeclarationCallExpression = isVariableDeclarationTypeEqual("CallExpression");
var getVariableDeclarationCalleeName = R.compose(_propGetters.name, _propGetters.callee, getVariableDeclarationInit);
var isVariableDeclarationCalleeNameEqual = function isVariableDeclarationCalleeNameEqual(x) {
  return R.compose(R.equals(x), getVariableDeclarationCalleeName);
};

var getVariableDeclarationName = exports.getVariableDeclarationName = R.compose(_propGetters.name, _propGetters.id, getDeclaration);
var getFirstCalleeArgument = exports.getFirstCalleeArgument = R.compose(_propGetters.value, R.head, _propGetters.argumentsProp, getVariableDeclarationInit);
var isRequreJSStatement = exports.isRequreJSStatement = R.both(isVariableDeclarationCallExpression, isVariableDeclarationCalleeNameEqual("require"));