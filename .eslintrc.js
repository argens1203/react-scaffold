module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": ["error", "ignorePackages", {
      ts: "never",
      tsx: "never",
    }],
    "import/prefer-default-export": "off",
    "func-names": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
  },
  settings: {
    'import/resolver': {
        typescript: {}
    }
  }
};
