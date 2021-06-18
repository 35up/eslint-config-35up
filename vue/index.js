module.exports = {
  extends: ['@35up/eslint-config-35up-base', 'vue-eslint-parser'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'no-await-in-loop': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.vue',
      ],
      extends: [
        'plugin:vue/recommended',
      ],
    },
    {
      files: [
        'tests-acceptance/**/*',
      ],
      extends: [
        'plugin:cypress/recommended',
      ],
    },
  ]
};
