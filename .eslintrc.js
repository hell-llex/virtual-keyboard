module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-plusplus': 'off',
		'no-tabs': 'off',
		'linebreak-style': 'off',
		indent: [2, 'tab'],
		'no-restricted-syntax': 'off',
	},
};
