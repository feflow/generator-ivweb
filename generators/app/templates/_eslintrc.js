module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": ["eslint:recommended", "ivweb"],
    "globals": {
        "__inline": true,
        "IS_SERVER": true,
        "__uri": true
    }
};
