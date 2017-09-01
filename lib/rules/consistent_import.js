/**
 * Created by Frantisek Farkas on 4.5.17.
 */
"use strict";

var _anyPass = require("ramda/src/anyPass");

var _anyPass2 = _interopRequireDefault(_anyPass);

var _equals = require("ramda/src/equals");

var _equals2 = _interopRequireDefault(_equals);

var _curry = require("ramda/src/curry");

var _curry2 = _interopRequireDefault(_curry);

var _common = require("../helpers/common");

var _imports = require("../helpers/imports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var isImportOfType = (0, _curry2.default)(function (type, node) {
	return (0, _equals2.default)(type, (0, _imports.getImportType)(node));
});
var isNamedImport = isImportOfType("ImportNamespaceSpecifier");

var shouldNotBeConsiderred = (0, _anyPass2.default)([_imports.doesNotHaveImportSpecifier, isNamedImport]);

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
				if (shouldNotBeConsiderred(node)) return;

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