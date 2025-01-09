/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  rules: {
    "prettier/prettier": ["error", { endOfLine: "off" }],
  },
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
};
