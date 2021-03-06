/**
 * Created by Frantisek Farkas on 4.5.17.
 */
"use strict";

var _common = require("../helpers/common");

var _imports = require("../helpers/imports");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		docs: {
			description: "enforce consistent import",
			category: "Possible Errors",
			recommended: true
		},

		fixable: "code"
	},

	create: function create(context) {
		return {
			ImportDeclaration: function ImportDeclaration(node) {
				var importName = (0, _imports.getImportName)(node);
				var moduleName = (0, _common.getModuleName)((0, _imports.getSourceValue)(node));

				if (importName !== moduleName) {
					context.report({
						node: node,
						message: "{{syntaxA}} is not consistent with {{syntaxB}}",
						data: {
							syntaxA: importName,
							syntaxB: moduleName
						}
					});
				}
			}
		};
	}
};