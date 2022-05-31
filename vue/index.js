module.exports = {
  extends: ['@35up/eslint-config-35up-base'],
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: [
        '**/*.vue',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
      ],
      rules: {
        'vue/no-deprecated-slot-attribute': 'off',
        'no-use-before-define': ['error', {functions: false}],
      }
    },
  ],
};
