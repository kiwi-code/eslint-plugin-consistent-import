/**
 * Created by Frantisek Farkas on 4.5.17.
 */
"use strict"
import R from "ramda"

import { getModuleName } from "../helpers/common"

import {
	getImportName,
	getSourceValue,
	getImportType,
	hasImportSpecifier,
	doesNotHaveImportSpecifier,
} from "../helpers/imports"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const isImportOfType = R.curry((type, node) =>
	R.equals(type, getImportType(node))
)
const isNamedImport = isImportOfType("ImportNamespaceSpecifier")

const shouldNotBeConsiderred = R.anyPass([doesNotHaveImportSpecifier, isNamedImport])

module.exports = {
	meta: {
		docs: {
			description: "enforce consistent import",
			category: "Possible Errors",
			recommended: true,
		},

		fixable: "code",
	},

	create(context) {
		return {
			ImportDeclaration: function(node) {
				if (shouldNotBeConsiderred(node)) return

				const importName = getImportName(node)
				const moduleName = getModuleName(getSourceValue(node))

				if (importName !== moduleName) {
					context.report({
						node,
						message: "{{syntaxA}} is not consistent with {{syntaxB}}",
						data: {
							syntaxA: importName,
							syntaxB: moduleName,
						},
					})
				}
			},
		}
	},
}
