module.exports = {
  extends: ['@35up/eslint-config-35up-base', 'plugin:react/recommended'],
  plugins: ['react'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'none',
    },
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react/display-name': 'off',
    'react/require-default-props': ['warn', {forbidDefaultForRequired: true}],
    'react/jsx-curly-spacing': ['error', 'never', {allowMultiline: true}],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'react/jsx-tag-spacing': ['warn', {beforeSelfClosing: 'always'}],
    'react/jsx-boolean-value': 'error',
    'react/forbid-prop-types': [
      'warn',
      {
        checkContextTypes: true,
        checkChildContextTypes: true,
        forbid: ['any', 'array', 'object'],
      },
    ],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': ['error', {maximum: 1, when: 'multiline'}],
    'react/jsx-pascal-case': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/no-unused-class-component-methods': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/hook-use-state': 'error',
    'react/prefer-stateless-function': ['warn', {ignorePureComponents: true}],
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-vriables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'constructor',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
            'componentDidCatch',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': [
      'error',
      {'maximum': {'single': 2, 'multi': 1}},
    ],
    'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: false}],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/state-in-constructor': ['error', 'never'],
    'react/jsx-fragments': ['error', 'element'],
    'react/static-property-placement': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.tsx']}],
    'react/jsx-no-comment-textnodes': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-unused-state': 'error',
    'react/no-typos': 'error',
    'react/no-this-in-sfc': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-curly-newline': 'error',
    'react/forbid-foreign-prop-types': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-key': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/jsx-child-element-spacing': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: ['enum', 'enumMember', 'objectLiteralProperty'],
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
        format: ['camelCase'],
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
        format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE'],
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
  overrides: [
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
        '**/*.ts',
        '**/*.tsx',
      ],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/jsx-fragments': 'off',
      },
    },
    {
      files: [
        '**/*.tsx',
      ],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
