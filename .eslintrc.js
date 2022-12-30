module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: "off",
    "@typescript-eslint/semi": [
      "warn"
    ],
    "@typescript-eslint/no-empty-interface": [
      "warn",
      {
        allowSingleExtends: true
      }
    ]
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals"
  ]
};