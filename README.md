How I set this up
--------------------

```
npm init
```

Added description, repository and license fields in package.json. 
Removed entrypoint and set to private in package.json.

```
touch .gitignore
```

Created .gitignore file.
Added node_modules/ to .gitignore.

```
touch README.md
```

Created README.md file.

```
git init
git add .
git commit -m "description of commit"
git remote add origin https://github.com/ambertaal/countingwords.git
git branch -M main
git push -u origin main
```
