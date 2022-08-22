# Add _prettier_ to your JS project

## Basic setup
### Add prettier to your project
```
npm install prettier -D
```
### Configure
An easy way to get configured prettier is: go to prettier.io/playground, copy the resulting JSON config rules and save them to `.prettierrc` file.

if you want to run prettier from command-line:
```
prettier --ignore-path .gitignore --write \"**/*.+(js|json)\"
```

To avoid conflicts between rules from prettier and eslint, you can add the `eslint-config-prettier` npm package to your dev dependencies and include it at the end of the `extends` array key of `.eslintrc` file.

```
npm install eslint-config-prettier -D
```

```
"extends": [..., ..., "eslint-config-prettier"]
```