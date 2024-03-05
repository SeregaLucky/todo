module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@wemake-services/stylelint-config-scss",
  ],

  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,jsx,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react"],

  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
