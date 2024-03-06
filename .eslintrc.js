module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@wemake-services/javascript",
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
    semi: ["error", "always"],
    quotes: ["error", "double"],

    "react/react-in-jsx-scope": "off",

    "unicorn/prefer-includes": "off",

    "quote-props": "off",
    "unicorn/no-null": "off",
    "unicorn/no-array-reduce": "off",
    complexity: "off",

    "unicorn/filename-case": "off", // Импорт что бы был кебабом
  },
};
