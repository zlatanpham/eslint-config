module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.js?(x)'],
      rules: {
        'no-underscore-dangle': 'error',
        'no-else-return': 'error',
        'dot-notation': 'error',
        eqeqeq: 'error',
        'no-nested-ternary': 'error',
        'no-unneeded-ternary': 'error',
        'react/self-closing-comp': 'error',
        'no-useless-return': 'error',
        'brace-style': 'error',
        'no-console': 'warn',
        'no-empty-function': [
          'error',
          {
            allow: ['arrowFunctions', 'functions', 'methods'],
          },
        ],
        curly: ['error', 'multi-line'],
        'no-lone-blocks': 'error',
        'no-multi-str': 'error',
        camelcase: [
          'error',
          { properties: 'never', ignoreDestructuring: false },
        ],
        'no-shadow': 'error',
        'newline-before-return': 'error',
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
          },
        ],
        'object-shorthand': 'error',
        'no-confusing-arrow': 'error',
        'prefer-template': 'error',
        'prefer-destructuring': 'error',
        'no-param-reassign': 'error',
        'nonblock-statement-body-position': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'max-depth': ['error', 4],
        'max-params': ['warn', 3],
        'no-duplicate-imports': 'error',
        'no-await-in-loop': 'error',
        'react/jsx-boolean-value': 'error',
        'react/jsx-key': 'error',
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            // NextJS favor
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    },
  ],
};
