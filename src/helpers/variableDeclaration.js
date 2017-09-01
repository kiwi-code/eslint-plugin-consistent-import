const R = require("ramda")

import { name, value, id, init, type, declarations, callee, argumentsProp } from "./propGetters"


const getDeclaration = R.compose(R.head, declarations)
const getVariableDeclarationInit = R.compose(R.pathOr({}, ["init"]), getDeclaration)
const getVariableDeclarationInitType = R.compose(R.pathOr({}, ["type"]), getVariableDeclarationInit)
const isVariableDeclarationTypeEqual = x => R.compose(R.equals(x), getVariableDeclarationInitType)
const isVariableDeclarationCallExpression = isVariableDeclarationTypeEqual("CallExpression")
const getVariableDeclarationCalleeName = R.compose(name, callee, getVariableDeclarationInit)
const isVariableDeclarationCalleeNameEqual = x => R.compose(R.equals(x), getVariableDeclarationCalleeName)

export const getVariableDeclarationName = R.compose(name, id, getDeclaration)
export const getFirstCalleeArgument = R.compose(value, R.head, argumentsProp, getVariableDeclarationInit)
export const isRequreJSStatement = R.both(isVariableDeclarationCallExpression, isVariableDeclarationCalleeNameEqual("require"))
