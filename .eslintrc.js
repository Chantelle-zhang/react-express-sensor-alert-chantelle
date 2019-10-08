module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: [
    'airbnb',
  ],
  parser: "babel-eslint",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "comma-dangle":0,
    "padded-blocks":0,
    "react/button-has-type":0,
    "consistent-return":0,
    "no-multi-spaces":0,
    " react/jsx-tag-spacing":0,
    " react/jsx-wrap-multilines":0,
    "semi":0,
    "no-console":0,
    "import/prefer-default-export":0,
    "no-multiple-empty-lines":0,
    "indent":0,
    "react/jsx-wrap-multilines":0,
    "react/jsx-indent":0,
    "implicit-arrow-linebreak":0





  },
};
