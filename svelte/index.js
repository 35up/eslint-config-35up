module.exports = {
  extends: ['@35up/eslint-config-35up-base'],
  plugins: ['svelte3', '@typescript-eslint'],
  env: {
    browser: true,
  },
  settings: {
    'svelte3/typescript': true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
        'import/first': 'off',
        'no-undef-init': 'off',
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
