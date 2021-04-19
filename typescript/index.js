module.exports = {
  extends: ['@35up/eslint-config-35up-base'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: [
        '**/*.ts',
      ],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-unused-expressions': 'off',
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
              'property',
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
        '**/tests/*.ts',
        '**/*.test.ts',
        '**/setup-tests.ts',
        '**/__mocks__/**/*.ts',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ],
};
