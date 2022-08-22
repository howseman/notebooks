# Git tips and tricks:

## TOC
- [Configure Git](#configure-git "Configure Git")
- [Create repositories](#create-repositories "Create repositories")

### Configure Git
Link to [Official documentation](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)

```sh
git config [--global] user.email "email@example.com"
```
And to check:
```sh
git config [--global] user.email
```
You can also set the `user.name` in the same manner.

### Create repositories
Creates a new local repository with the specified name
```sh
git init [project name]
```

### Zip current repo directory
```sh
git archive HEAD -o ${PWD##*/}.zip
```