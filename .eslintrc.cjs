module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort', 'import', 'sonarjs', 'eslint-plugin-tsdoc'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
  ],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-inferrable-types': ['off'],

    'object-shorthand': ['error', 'always'],

    'import/extensions': ['error', 'ignorePackages', { js: 'always', jsx: 'never', ts: 'never', tsx: 'never' }],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^node:'], ['^[a-z]\\w'], ['^@[a-z]\\w'], ['^@src/[a-z]\\w'], ['^\\.']],
      },
    ],

    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        ignore: ['\\.e2e-spec', /^ignore/i, /^i$/, /env|dir|dev|prod|db|params/i],
        replacements: {
          res: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
