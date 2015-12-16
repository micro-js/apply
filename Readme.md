
# apply

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Faster apply than the native Function.prototype.apply

## Installation

    $ npm install @f/apply

## Usage

```js
var apply = require('@f/apply')

apply(add, [1, 2]) // => 3

function add (one, two) {
  return one + two
}
```

## API

### apply(fn, args)

  * `fn` - The function to invoke
  * `args` - The argument list as an array

**Returns:** return of invoked `fn`

## Performance

Here's the [jsperf](http://jsperf.com/apply-vs-switch/7).  In Chrome, it's roughly 2.5x faster than the native apply.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/apply.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/apply
[git-image]: https://img.shields.io/github/tag/micro-js/apply.svg
[git-url]: https://github.com/micro-js/apply
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/apply.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/apply
