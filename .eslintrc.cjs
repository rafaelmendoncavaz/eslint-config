module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true 
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin: react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "react",
    "jsx-ally",
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { 
        allowConstantExport: true
      },
    ],
    "react/self-closing-comp": [],
    "quotes": ["error", "double"],
    "padding-line-between-statements": ["error", 
      {
        blankLine: "always", 
        prev: "*", 
        next: "block"
      },
      {
        blankLine: "always", 
        prev: "*", 
        next: "block-like"
      },
      {
        blankLine: "always", 
        prev: "*", 
        next: "return"
      },
    ],
    "keyword-spacing": ["error", 
      {
        before: true,
        after: true
      }
    ],
    "space-infix-ops": "error",
    "semi": ["error", "always"],
    "array-element-newline": ["error", 
      {
        multiline: true,
        minItems: 3
      }
    ],
    "object-curly-newline": ["error",
      {
        multiline: true,
        consistent: true
      }
    ],
    "object-property-newline": ["error",
      {
        allowAllPropertiesOnSameLine: false
      }
    ],
    "prettier/prettier": "error",
  },
}
