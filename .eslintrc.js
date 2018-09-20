// // http://eslint.org/docs/user-guide/configuring
// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     sourceType: 'module'
//   },
//   env: {
//     browser: true,
//   },
//   extends: 'airbnb',
//   // required to lint *.vue files
//   plugins: [
//     'html'
//   ],
//   // add your custom rules here
//   'rules': {
//     // allow paren-less arrow functions
//     'arrow-parens': 0,
//     // allow async-await
//     'generator-star-spacing': 0,
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
//     'no-console': 0
//   },
//   "globals": {
//    "google": true
//  }
// }
//



// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  env: {
    browser: true,
    es6: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'settings': {
    'import/resolver': {
      // 'webpack': {
      //   'config': 'build/webpack.base.conf.js'
      // }
    }
  },
  globals: {
    'Stripe': true
  },
  // add your custom rules here
  'rules': {
    'import/prefer-default-export': 'off',
      // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'max-len': 'off',
    'import/no-webpack-loader-syntax': 'off',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow console during development
    'no-console': 0,
    // set default spacing to 4 spaces
    'indent': ["error", 4],
    'no-param-reassign': ["error", { "props": false }],
    'no-shadow': 'off',
    "no-unused-vars": 0,
    "arrow-body-style": ["error", "as-needed"],
    "mode": 'development'
  }
}
