const rule = require("../../src/rules/consistent_import")
const RuleTester = require("eslint").RuleTester

const parserOptions = {
	ecmaVersion: 6,
	sourceType: "module",
	ecmaFeatures: {
		jsx: true,
	},
}

const importErrors = [{
	type: "ImportDeclaration",
	message: "Inconsistent import",
}, ]


const suggestionTests = {

	valid: [{
			code: "import ProductComponent from '../../ProductComponent'",
			parserOptions,
		},
		{
			code: "import BookingDuck from '../../BookingDuck'",
			parserOptions,
		},
		{
			code: "import BookingDuck from '../../BookingDuck.js'",
			parserOptions,
		},
		{
			code: "import BookingDuck from '../../BookingDuck.spec.js'",
			parserOptions,
		},
		{
			code: "import { BookingDuck, BookingQuack } from '../../BookingDuck.spec.js'",
			parserOptions,
		},
		{
			code: 'import fileName from "./fileName"',
			parserOptions,
		},
		{
			code: 'import { asdf as fileName } from "./fileName"',
			parserOptions,
		},
		{
			code: 'import * as notFileName from "./fileName"',
			parserOptions,
		},
		{
			code: 'import "library"',
			parserOptions,
		},
	],
	invalid: [{
			code: "import Product from '../../ProductComponent'",
			parserOptions,
			errors: [{
				type: "ImportDeclaration",
				message: 'Product is not consistent with ProductComponent',
			}]
		},
		{
			code: "import Booking from '../../BookingDuck'",
			parserOptions,
			errors: [{
				type: "ImportDeclaration",
				message: 'Booking is not consistent with BookingDuck',
			}]
		},
	],
}

const ruleTester = new RuleTester()
ruleTester.run("consistent_import", rule, suggestionTests)
