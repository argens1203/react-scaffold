module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
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
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": ["error", "ignorePackages", {
      ts: "never",
      tsx: "never",
    }],
    "import/prefer-default-export": "off",
    "func-names": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
    'max-len': ['warn', { 'code': 180 }], //TODO: adjust
    'import/no-extraneous-dependencies': ["error", {"devDependencies": ["**/*.spec.ts", "**/*.spec.tsx", '**/setupTests.ts']}],
    "no-case-declarations": 'off',
    'no-console': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
  settings: {
    'import/resolver': {
        typescript: {}
    }
  }
};
