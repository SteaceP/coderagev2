/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
  ],
  env: {
    "cypress/globals": true,
  },
  plugins: ["cypress"],
  settings: {
    jest: {
      version: 28, //need to set the jest version explicitly
    },
  },
};
