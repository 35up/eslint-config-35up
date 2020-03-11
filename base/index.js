module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['import'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'max-len': [
      'warn',
      80,
      {
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^\\s*<svg|^import .+ from|^const .+ = require\\(|^\\s*it\\(|^\\s*test\\(|^\\s*describe\\(',
      },
    ],
    quotes: ['error', 'single', {avoidEscape: true}],
    'no-console': ['warn', {allow: ['warn', 'error']}],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-underscore-dangle': 'error',
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
    'class-methods-use-this': 'off',
    'no-shadow': 'warn',
    'no-param-reassign': 'warn',
    'spaced-comment': 'warn',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    'array-bracket-spacing': 'off',
    'no-restricted-syntax': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'lines-between-class-members': [
      'error',
      'always',
      {exceptAfterSingleLine: true},
    ],
    'import/extensions': ['error', 'never'],
    'import/no-cycle': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: [
        '**/test/*',
        '**/*.test.js',
        '**/*.test.jsx',
        'src/setupTests.js',
        '**/__mocks__/**/*',
      ],
      env: {
        jest: true,
        node: true,
      },
      rules: {
        'no-unused-expressions': 'off',
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
      },
    },
    {
      files: ['webpack.config.js', 'webpack.config.*.js'],
      env: {
        node: true,
        browser: false,
      },
      rules: {
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
      },
    },
  ],
};
