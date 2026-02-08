export default {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  ignoreFiles: ['dist/**', 'build/**', 'node_modules/**'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-length': 'long',
    'media-query-no-invalid': null,
    'scss/at-rule-no-unknown': null,
    'declaration-property-value-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-pseudo-class-no-unknown': null,
  },
}
