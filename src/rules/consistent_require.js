/**
 * Created by Frantisek Farkas on 4.5.17.
 */

"use strict"
import R from "ramda"

import { getModuleName } from "../helpers/common"

import {
	isRequreJSStatement,
	getVariableDeclarationName,
	getFirstCalleeArgument,
} from "../helpers/variableDeclaration"

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: "enforce consistent import",
			category: "Variables",
			recommended: true,
		},

		fixable: "code",
	},

	create(context) {

		return {
			VariableDeclaration: node => {
				if (isRequreJSStatement(node)) {
					const variableName = getVariableDeclarationName(node)
					const moduleName = getModuleName(getFirstCalleeArgument(node))

					if (variableName !== moduleName) {
						context.report({
							node,
							message: "{{syntaxA}} is not consistent with {{syntaxB}}",
							data: {
								syntaxA: variableName,
								syntaxB: moduleName,
							},
						})
					}
				}
			},
		}
	},
}
