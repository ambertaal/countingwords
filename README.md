How I set this up
------

Initialize npm
------
```
npm init
```

Added description, repository and license fields in package.json. 
Removed entrypoint and set to private using `"private": true` in package.json.

```
touch .gitignore
```

Added `node_modules/` to .gitignore.

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

Install and configure typescript
------

```
npm install --save-dev typescript
```

Added `"build": "tsc"` to package.json.

```
npx tsc --init
```

Set rootDir and outDir in tsconfig.json.

```
mkdir src
touch src/countingwords.ts
mkdir build
```

Added 'build/' to .gitignore.

```
git add .
git commit -m "description of commit"
git push -u origin main
```

Install ts-node for easier TypeScript running
------

```
npm install -D typescript
npm install -D ts-node
npm install -D tslib @types/node
```

```
git add .
git commit -m "description of commit"
git push -u origin main
```

Usage
-----

```
npx ts-node src/countingwords.ts
```

Execute `helloworld.ts` using `node` + `tsc`.

Install and configure Jest
-----

```
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init
```

```
git add .
git commit -m "description of commit"
git push -u origin main
```