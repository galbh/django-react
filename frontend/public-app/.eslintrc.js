module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jasmine": true
    },
    "extends": ["airbnb-standard"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [ "react" ],
	"overrides": [
		{
			"files": ["*.page.jsx"],
			"rules": {
				"react/prop-types": 0
			}
		}
	],
    "rules": {
      "class-methods-use-this": 0,
      "import/extensions": 0,
      "jsx-a11y/label-has-for": [ 2, {
        "required": {
            "every": [ "id" ]
        }
      }],
      "jsx-a11y/anchor-is-valid": 0
    },
    globals: {
      "API_HOST": true
    }
  }
