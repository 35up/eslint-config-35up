module.exports = {
  extends: ['@35up/eslint-config-35up-base'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
  overrides: [
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
