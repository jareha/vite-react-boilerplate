/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  indent_style: "space",
  indent_size: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  cssEnable: [
    "css",
    "sass",
  ],
};

export default config;
