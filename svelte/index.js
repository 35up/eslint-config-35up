const { tsRules } = require('@35up/eslint-config-35up-base/ts-rules');

module.exports = {
  extends: ['@35up/eslint-config-35up-base'],
  plugins: ['svelte', '@typescript-eslint'],
  parserOptions: {
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
  },
  settings: {
    'svelte/typescript': true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      extends: ['plugin:svelte/recommended'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          js: 'espree',
          typescript: '@typescript-eslint/parser',
        },
      },
      rules: {
        'no-undef-init': 'off',
        'svelte/valid-compile': 'warn',
        'import/no-mutable-exports': 'off',
        ...tsRules,
      },
    },
    {
      files: [
        'svelte.config.js',
        'svelte.config.ts',
      ],
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
