const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    rules: {
      // formatting rule so incorrect spacing fails the build too
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    },
    ignores: ["eslint.config.js"]

  }
];