const jsRules = require('./js-rules');
const tsRules = require('./ts-rules');


module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['import', '@typescript-eslint', 'no-only-tests'],
  env: {
    es6: true,
  },
  rules: jsRules,
  overrides: [
    {
      files: [
        '**/test/*',
        '**/tests/*',
        '**/*.test.*',
        '**/*.stories.*',
        '**/setup-tests.*',
        '**/__mocks__/**/*',
        'mock-server/**/*',
      ],
      env: {
        node: true,
      },
      rules: {
        'no-unused-expressions': 'off',
        'no-plusplus': 'off',
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
      },
    },
    {
      files: [
        '**/test/*',
        '**/tests/*',
        '**/*.test.*',
        '**/setup-tests.*',
        '**/__mocks__/**/*',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        'webpack.config.js',
        'webpack.config.*.js',
        'rollup.config.[jt]s',
        'vite.config.[jt]s',
        'svelte.config.[jt]s',
        'src/index.dev.[jt]s',
      ],
      env: {
        node: true,
        browser: false,
      },
      rules: {
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
      },
    },
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      parser: '@typescript-eslint/parser',
      rules: tsRules,
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
    {
      files: [
        '**/test/*.ts',
        '**/test/*.tsx',
        '**/tests/*.ts',
        '**/tests/*.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/setup-tests.ts',
        '**/setup-tests.tsx',
        '**/__mocks__/**/*.ts',
        '**/__mocks__/**/*.tsx',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: [
        'tests-acceptance/**/*',
        'cypress/**/*',
      ],
      extends: [
        'plugin:cypress/recommended',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {devDependencies: true},
        ],
      },
    },
    {
      files: [
        'tests-acceptance/commands/**',
        'cypress/commands/**',
      ],
      rules: {
        '@typescript-eslint/no-namespace': [
          'error',
          {allowDeclarations: true},
        ],
      },
    },
    {
      files: [
        '**/*.stories.ts',
        '**/*.stories.tsx',
      ],
      rules: {
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: ['enum', 'enumMember'],
            format: ['UPPER_CASE'],
          },
          {
            selector: ['typeAlias'],
            format: ['StrictPascalCase'],
            prefix: ['T'],
          },
          {
            selector: [
              'variable',
              'function',
              'parameter',
              'method',
              'classProperty',
              'typeProperty',
            ],
            format: ['strictCamelCase'],
          },
          {
            selector: [
              'variable',
              'function',
              'parameter',
              'method',
              'property',
            ],
            modifiers: ['requiresQuotes'],
            format: null,
          },
          {
            selector: ['variable'],
            modifiers: ['const'],
            format: ['strictCamelCase', 'UPPER_CASE', 'PascalCase'],
          },
          {
            selector: ['class'],
            format: ['StrictPascalCase'],
          },
          {
            selector: ['parameter'],
            modifiers: ['unused'],
            leadingUnderscore: 'allowSingleOrDouble',
            format: null,
          },
        ],
      },
    },
  ],
};
