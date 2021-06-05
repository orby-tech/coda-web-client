module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },

  },
  env: {
    browser: true,
    es2021: true,
    jest: { globals: true },
  },

  extends: ['plugin:react/recommended', 'airbnb'],

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
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': ['error', 'always', { ts: 'never', tsx: 'never' }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'no-use-before-define': 'off',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
};
