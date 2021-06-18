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
        'tests-acceptance/**/*',
      ],
      extends: [
        'plugin:cypress/recommended',
      ],
    },
    {
      files: [
        'svelte.config.js',
        'rollup.config.js',
        'vite.config.js',
        'src/index.dev.ts',
      ],
      env: {
        node: true,
        browser: false,
      },
      rules: {
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
      },
    },
  ]
};
