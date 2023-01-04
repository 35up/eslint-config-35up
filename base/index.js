module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['import', '@typescript-eslint'],
  env: {
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
        ignorePattern: (
          '^\\s*<svg|^import .+ from|^const .+ = '
          + 'require\\(|^\\s*it\\(|^\\s*test\\(|^\\s*describe\\('
        ),
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
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'error',
    'no-continue': 'off',
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
    'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 0, maxEOF: 1}],
    'class-methods-use-this': 'off',
    'no-shadow': 'warn',
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
    'no-param-reassign': ['error', {props: false}],
    'no-constant-binary-expression': 'error',
    'import/extensions': ['error', 'never', {'mock-data': 'always'}],
    'import/no-cycle': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/order': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
  },
  overrides: [
    {
      files: [
        '**/test/*',
        '**/tests/*',
        '**/*.test.*',
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
      rules: {
        '@typescript-eslint/consistent-type-exports': [
          'error',
          {fixMixedExportsWithInlineTypeSpecifier: true},
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error'],
        'no-unused-expressions': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
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
            format: ['strictCamelCase', 'UPPER_CASE'],
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
        '**/setup-tests.ts',
        '**/setup-tests.tsx',
        '**/__mocks__/**/*.ts',
        '**/__mocks__/**/*.tsx',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
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
  ],
};
