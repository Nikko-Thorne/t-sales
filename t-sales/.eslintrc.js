module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "2023",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
          }
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
    },
    "rules": {
    }
}
