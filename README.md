# bth012-2023-library
A node.js project that we developed during lectures with automatic unit tests using jest.

## Setup
In the project root, install the npm dependencies with the following command
```bash
$ npm install
```

## Run the program
```bash
$ node library.js
```


## Linting
Linting has been adjusted to not warn for undefined functions that is implicitly defined by jest (describe, it, expect, ..) but also to error when tests are focused (`describe.only`, `it.only`) or ignored (`describe.skip`, `it.skip`).

## Editor config
A visual code config has been added to set consistent indentation and handling of file endings according to the style guide.
