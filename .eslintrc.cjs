module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'package.json',
    'package-lock.json',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic'],
  rules: {
    // With autofix
    'block-spacing': 'off',
    '@typescript-eslint/block-spacing': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    'no-template-curly-in-string': 'error',
    'no-implicit-coercion': 'error',
    'no-lonely-if': 'error',
    'yoda': 'error',
    'curly': 'error',

    // Without autofix
    'no-alert': 'error',
    'no-bitwise': 'error',
    'no-empty-function': 'error',
    'no-magic-numbers': 'error',
    'no-duplicate-imports': 'error',
    'arrow-body-style': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'camelcase': [
      'error',
      {
        ignoreDestructuring: true,
        ignoreImports: true,
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
