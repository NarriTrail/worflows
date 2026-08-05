const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
 { ignores: ["eslint.config.js"]},
  {
    rules: {
      // formatting rule so incorrect spacing fails the build too
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    },
        languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly"
      }
    },

  }
];