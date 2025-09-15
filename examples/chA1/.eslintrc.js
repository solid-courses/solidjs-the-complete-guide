/**@type {import('eslint').Linter.Config} */

module.exports = {
  // Tells ESLint to use this parser package,
  // allowing it to parse and understand TypeScript syntax.
  parser: '@typescript-eslint/parser',
  plugins: [
    // Enable ESLint to support TypeScript
    '@typescript-eslint',
    // Disallow unsanitized code
    'plugin:no-unsanitized/DOM',
  ],
  extends: [
    // Use recommended settings
    'eslint:recommended',
    // Use recommended settings for TypeScript
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Add custom rules
    'semi': [2, 'always'],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  // Suppress linting errors for css files and 'webpack.config.js' file
  ignorePatterns: ['*.css', 'webpack.config.js'],
};
