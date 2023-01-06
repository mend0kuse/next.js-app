module.exports = {
  root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		semi: 'off',
		'@typescript-eslint/semi': ['warn'],
		'@typescript-eslint/no-empty-interface': [
			'warn',
			{
				allowSingleExtends: true,
			},
		],
	},
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'next/core-web-vitals',
	],
};