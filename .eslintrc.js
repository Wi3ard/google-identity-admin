const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'only-multiline',
        functions: 'only-multiline',
        objects: 'always-multiline',
      },
    ],
    'global-require': 1,
    'import/imports-first': 2,
    'import/newline-after-import': 2,
    'import/no-cycle': 1,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': [2, { caseSensitive: false }], // ts already checks case sensitive imports
    'import/no-webpack-loader-syntax': 0,
    'import/order': [
      2,
      {
        'alphabetize': { caseInsensitive: true, order: 'asc' },
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 0,
    'indent': [2, 2, { SwitchCase: 1 }],
    'max-len': 0,
    'member-ordering': 0,
    'newline-per-chained-call': 0,
    'no-case-declarations': 1,
    'no-confusing-arrow': 0,
    'no-consecutive-blank-lines': 0,
    'no-console': 0,
    'no-implicit-dependencies': 0,
    'no-param-reassign': [1, { props: false }],
    'no-shadowed-variable': 0,
    'no-string-literal': 0,
    'no-submodule-imports': 0,
    'no-template-curly-in-string': 0,
    'no-use-before-define': 0,
    'object-literal-sort-keys': 0,
    'object-shorthand': [0, 'never'],
    'prefer-template': 2,
    'prettier/prettier': ['error', prettierOptions],
    'quote-props': ['error', 'consistent'],
    'quotes': [2, 'single'],
    'require-yield': 0,
    'semi': [2, 'always'],
    'sort-imports': [
      2,
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'sort-keys': [2, 'asc', { caseSensitive: true, natural: false }],
  },
  settings: {
    'import/ignore': ['node_modules'],
  },
};
