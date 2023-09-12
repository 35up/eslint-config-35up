module.exports = {
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
  '@typescript-eslint/ban-types': ['error', {types: {'{}': false}}],
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
};
