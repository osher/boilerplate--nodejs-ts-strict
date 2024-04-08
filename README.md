# NodeJS Starter Project

Project bootstrapped using [NodeJS Starter ToolKit](https://github.com/vitorsalgado/create-nodejs-ts), but customized for a rather strict workflow.

The code itself is a simpleton hello web-server.

The project does not have any dependencies except `nodenv` - it does not have to be a web-server.
(actually there's `supertest` which you can remove if it's not a web-server).

# Tools:

- `tsc` setup for _NodeNext_, _ES2022_
- `prettier`
- `eslint` with `recommended`, `strict`, `unicorn`, `sonarjs` and `prettier`
- `husky:precommit` with `lint-staged` + `pretty-quick`
- `husky:commit-msg` with `commitlint`
- `jest` test runner with `ts-node`, `ts-loader`, `ts-jest` and `supertest`
