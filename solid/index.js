module.exports = {
  extends: ['@35up/eslint-config-35up-base', 'plugin:solid/typescript'],
  plugins: ['solid'],
  env: {
    browser: true,
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: [
          'variable',
          'function',
          'parameter',
          'method',
          'property',
        ],
        format: ['camelCase'],
      },
      {
        selector: ['variable'],
        modifiers: ['const'],
        format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
  },
  overrides: [
    {
      files: ['tests-acceptance/**'],
      rules: {
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        '@typescript-eslint/no-namespace': ['error', {allowDeclarations: true}],
      },
    },
  ],
};
