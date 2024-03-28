## Backend

The backend was written in python. to be continued..

## Frontend

# React + TypeScript + Vite

A home project of a TODO list generated with a minimal setup to get React working in Vite with HMR and some ESLint rules.

## How to use

Clone the repo
Run `npm install`
Run `npm run dev`

## ESLint configuration expanded according to production recommendations

we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `**parserOptions**` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
