module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  globals: {},
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.vue', '.js'],
      },
    },
  },
  rules: {
    'import/extensions': 0,
    'semi': ['error', 'never'],
    'prefer-template': 1,
    'import/no-cycle': 1,
    'spaced-comment': ['error', 'always'],
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'comma-dangle': ['error', 'never'],
    'max-len': [2, {
      'code': 80,
      'comments': 100,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  },
};
