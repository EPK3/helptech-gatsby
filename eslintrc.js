module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'react/no-array-index-key': 'off',
    'no-console': 'warn',
    'import/exports-last': 'warn',
    'import/no-extraneous-dependencies': ['off'],
    'import/no-named-as-default': 0,
    'import/no-relative-packages': 'off',
    'import/group-exports': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'object', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/function-component-definition': 'off',
    'react/jsx-key': 'error',
    'react/jsx-filename-extension': 'off',
    // Prefer to use jsx rather than js
    'react/jsx-`prop`s-no-spreading': 'off',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/button-has-type': 'off',
    'import/exports-last': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: '2020',
  },
}
