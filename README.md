# polyrepo
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Tools for distributed codebases.

## Installation
```sh
$ npm install polyrepo
```

## Features
- add users to project (npm, github)
- pull organization / user codebase
- run install on codebase
- update dependencies of codebase
- add `Contributors` to readme
- add `See Also` to readme
- update licenses
- run all tests
- filter on missing {tests,licenses,package.json fields,etc}
- manage stability badges
- deprecate package & suggest alternative

## Usage
```js
const polyrepo = require('polyrepo')

polyrepo()
```

## API
### polyrepo

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/polyrepo.svg?style=flat-square
[npm-url]: https://npmjs.org/package/polyrepo
[travis-image]: https://img.shields.io/travis/polyrepo/polyrepo/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/polyrepo/polyrepo
[codecov-image]: https://img.shields.io/codecov/c/github/polyrepo/polyrepo/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/polyrepo/polyrepo
[downloads-image]: http://img.shields.io/npm/dm/polyrepo.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/polyrepo
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
