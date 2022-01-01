module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'func-names': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.spec.ts',
                    '**/*.test.ts',
                    '**/*.spec.tsx',
                    '**/*.test.tsx',
                    '**/setupTests.ts',
                ],
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'max-len': ['warn', { code: 180 }], // TODO: adjust
        'max-classes-per-file': ['off'],
        'no-case-declarations': 'off',
        'no-console': 'error',
        'no-param-reassign': [
            'error',
            { props: true, ignorePropertyModificationsFor: ['state'] },
        ],
        'no-use-before-define': 'off',
        'no-unused-vars': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': ['warn'],
        'react/button-has-type': ['warn'],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
