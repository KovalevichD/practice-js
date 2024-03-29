module.exports =  {
	parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
	extends:  [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	parserOptions:  {
		ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
		sourceType:  'module',  // Allows for the use of imports
	},
	rules: {
		"@typescript-eslint/explicit-function-return-type": 0,
		"react/prop-types": [2, { ignore: ['children'] }],
		"@typescript-eslint/no-unused-vars": 2,
		"@typescript-eslint/no-var-requires": 2,
		"@typescript-eslint/no-use-before-define": 0,
		"@typescript-eslint/interface-name-prefix": 0,
		'no-console': ['error', {allow: ['warn', 'error', 'info']}],
		'newline-before-return': 'error',
		'padding-line-between-statements': ['error',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
		]
	},
	settings: {
		react: {
			pragma: "React",
			version: "16.8.6"
		}
	}
};