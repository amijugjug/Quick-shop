module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true }, // Added `node` for Node.js environments
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // If using TypeScript
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript', // If using TypeScript
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  settings: {
    react: {
      version: '18.2',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these file types
      },
    },
  },
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off', // Turn off if using TypeScript for type checking
    'react/react-in-jsx-scope': 'off', // Next.js handles React import automatically
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/prefer-default-export': 'off', // Allow named exports
    'no-unused-vars': 'warn', // Warn about unused variables
    'no-debugger': 'warn', // Warn about debugger statements (optional)
    'react/jsx-props-no-spreading': 'off', // Allow props spreading if needed
    'react/jsx-key': 'warn', // Warn about missing keys in lists
    '@typescript-eslint/explicit-module-boundary-types': 'off', // If using TypeScript and prefer less strict boundaries
    '@typescript-eslint/no-explicit-any': 'warn', // Warn about usage of `any`
  },
};
