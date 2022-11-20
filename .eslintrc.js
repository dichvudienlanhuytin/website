module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["plugin:gridsome/recommended"],
  rules: {
    "comma-dangle": ["off", "never"],
    semi: ["error", "never"],
    "no-console": "off",
  },
}
