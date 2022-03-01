module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        createDefaultProgram: true,
    },
    plugins: [
        'react-hooks',
        '@typescript-eslint',
        'react',
    ],
    rules: {
        quotes: ['warn', 'single', { avoidEscape: true }],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': ['warn', { before: false, after: true }],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'func-call-spacing': ['warn', 'never'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'key-spacing': ['warn'],
        'no-trailing-spaces': ['warn'],
        'no-whitespace-before-property': ['warn'],
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
        'quote-props': ['warn', 'as-needed'],
        semi: ['warn'],
        'semi-spacing': ['warn'],
        'semi-style': ['warn'],
        'space-before-blocks': ['warn'],
        'space-in-parens': ['warn'],
        'space-infix-ops': ['warn'],
        'space-unary-ops': ['warn'],

        'import/prefer-default-export': 'off',

        // React
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-curly-spacing': ['warn', { when: 'always', children: true }],
        'react/jsx-fragments': ['warn', 'element'],
        'react/static-property-placement': ['error', 'static public field'],
        'react/jsx-boolean-value': ['error', 'always'],
        'react-hooks/exhaustive-deps': 'off',

        '@typescript-eslint/indent': [
            'warn',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ['TSTypeParameterInstantiation'],
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
