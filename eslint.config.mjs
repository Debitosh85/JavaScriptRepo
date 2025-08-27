import google from "eslint-config-google";
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  google,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Overrides if needed
    },
  },
];
