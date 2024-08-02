module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'linebreak-style': ['error', 'unix'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'],
      },
    ],
  },
};
