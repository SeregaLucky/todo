module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "@wemake-services/javascript",
  ],

  "overrides": [
    {
      "env": {
        "node": true,
      },
      "files": [".eslintrc.{js,jsx,cjs}"],
      "parserOptions": {
        "sourceType": "script",
      },
    },
  ],

  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },

  "plugins": ["react"],

  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],

    "react/react-in-jsx-scope": "off", // This rule is outdated and an error

    "unicorn/prefer-includes": "off", // This rule is outdated and an error
    "unicorn/no-array-reduce": "off", // This rule is outdated and an error

    "unicorn/no-null": "off",
    "complexity": "off",
    "unicorn/filename-case": "off",
  },
};
