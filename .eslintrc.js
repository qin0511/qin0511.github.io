module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    // I cloned the repo down and found the prettier and eslint not working, found out you have this bug.
    "extends": ["eslint:recommended","prettier"],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
