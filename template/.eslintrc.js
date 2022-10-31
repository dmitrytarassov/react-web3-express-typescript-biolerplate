module.exports = {
    "root": true,
    "parser": '@typescript-eslint/parser',
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "plugins": [
        '@typescript-eslint/eslint-plugin',
    ],
    "extends": [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "rules": {
        "no-console": "off",
        "comma-dangle": "off",
        "react/jsx-filename-extension": "off"
    }
};
