module.exports = {
  'env': {
    node: true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint','prettier'],
  'rules': {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'linebreak-style': [
      'error',
      'unix'
    ],
   
    'semi': [
      'error',
      'never'
    ]
  },
  globals: {
    __DEV__: false,
   
  },
  settings: {
    react: {version: 'detect'},
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
}
