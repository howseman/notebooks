# Add _eslint_ to your JS project

## Basic setup
### Add eslint to your project
```
npm install eslint -D
```

### Add .eslintrc file into your root project directory
**Basic Template:**
```json
{
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["eslint: recommended", "react-app"],
  "rules": { // These object overrides the extended rules from "extends" key
    "valid-typeof": "error"
  },
  "env": {
    "browser": true
  }
}
```
### Add .eslintignore file into your root project directory
It works like `.gitignore` file

**Basic Template:**
```
node_modules
dist
```
you can also use the `.gitignore` file as your `.ignore` file adding to your `command line` or `npm` command the `ignore-path` option
```
eslint --ignore-path .gitignore .
```
