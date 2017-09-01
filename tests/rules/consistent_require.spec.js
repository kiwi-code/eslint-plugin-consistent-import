const rule = require("../../src/rules/consistent_require")
const RuleTester = require("eslint").RuleTester

const parserOptions = {
	ecmaVersion: 6,
	sourceType: "module",
	ecmaFeatures: {
		jsx: true,
	},
}

const importErrors = [
	{
		type: "VariableDeclaration",
		message: "Inconsistent import",
	},
]

const suggestionTests = {
	valid: [
		{
			code: "let BookingDuck = require('../../BookingDuck')",
			parserOptions,
		},
		{
			code: "var BookingDuck = require('../../BookingDuck')",
			parserOptions,
		},
		{
			code: "const BookingDuck = require('../../BookingDuck')",
			parserOptions,
		},
		{
			code: "const BookingDuck = surpriiise('../../BookingDuck')",
			parserOptions,
		},
		{
			code: "const BookingDuck = '../../BookingDuck'",
			parserOptions,
		},
		{
			code: "let BookingDuck",
			parserOptions,
		},
		{
			code: "let BookingDuck = maFunction()",
			parserOptions,
		},
	],
	invalid: [
		{
			code: "let BookingDuck = require('../../Duck')",
			parserOptions,
			errors: [
				{
					type: "VariableDeclaration",
					message: "BookingDuck is not consistent with Duck",
				},
			],
		},
		{
			code: "var BookingDuck = require('../../Duck')",
			parserOptions,
			errors: [
				{
					type: "VariableDeclaration",
					message: "BookingDuck is not consistent with Duck",
				},
			],
		},
		{
			code: "const BookingDuck = require('../../Duck')",
			parserOptions,
			errors: [
				{
					type: "VariableDeclaration",
					message: "BookingDuck is not consistent with Duck",
				},
			],
		},
	],
}

const ruleTester = new RuleTester()
ruleTester.run("consistent_require", rule, suggestionTests)
