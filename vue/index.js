module.exports = {
  extends: ['@35up/eslint-config-35up-base'],
  plugins: ['@typescript-eslint'],
  parser: ['vue-eslint-parser'],
  env: {
    browser: true,
    es6: true,
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
  ]
};
