module.exports = {
  extends: ['plugin:vue/recommended'],
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  rules: {
    /**********************/
    /*     Vue Rules      */
    /**********************/

    // Disable template errors regarding invalid end tags
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false
      }
    ],

    // Maximum 5 attributes per line instead of one
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5
      }
    ],

    'vue/html-indent': 'off'
  }
}
