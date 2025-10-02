import { defineConfig } from "eslint/config";

import babelParser from "@babel/eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import json from "@eslint/json";
import react from "eslint-plugin-react";
import stylistic from "@stylistic/eslint-plugin";
import typescript from "typescript";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      json,
      react,
      typescript,
      stylistic,
    },
    rules: {
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          max: 1,
        },
      ],
      "@stylistic/indent": ["error", 2],
    },
  },
  eslintConfigPrettier,
]);
