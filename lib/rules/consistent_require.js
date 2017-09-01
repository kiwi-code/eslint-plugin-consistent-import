/**
 * Created by Frantisek Farkas on 4.5.17.
 */

"use strict";

var _common = require("../helpers/common");

var _variableDeclaration = require("../helpers/variableDeclaration");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: "enforce consistent import",
			category: "Variables",
			recommended: true
		},

		fixable: "code"
	},

	create: function create(context) {

		return {
			VariableDeclaration: function VariableDeclaration(node) {
				if ((0, _variableDeclaration.isRequreJSStatement)(node)) {
					var variableName = (0, _variableDeclaration.getVariableDeclarationName)(node);
					var moduleName = (0, _common.getModuleName)((0, _variableDeclaration.getFirstCalleeArgument)(node));

					if (variableName !== moduleName) {
						context.report({
							node: node,
							message: "{{syntaxA}} is not consistent with {{syntaxB}}",
							data: {
								syntaxA: variableName,
								syntaxB: moduleName
							}
						});
					}
				}
			}
		};
	}
};