module.exports = {
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
  'no-only-tests/no-only-tests': ['error', {focus: ['only', 'skip']},
  ],
  eqeqeq: ['error', 'smart'],
};
