module.exports = {
  extends: ['@35up/eslint-config-35up-base', 'plugin:svelte/recommended'],
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
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          js: 'espree',
          typescript: '@typescript-eslint/parser',
        },
      },
    },
    {
      files: [
        'svelte.config.js',
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
