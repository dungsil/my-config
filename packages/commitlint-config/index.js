module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
    'header-max-length': [2, 'always', 120],
    'body-max-line-length': [2, 'always', 180],
    'footer-max-line-length': [2, 'always', 180]
  }
}
