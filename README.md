<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# composeAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Function composition][function-composition].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import composeAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-compose@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-async-compose/tags). For example,

```javascript
import composeAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-compose@v0.2.2-esm/index.mjs';
```

#### composeAsync( ...fcn )

Returns a composite function. Starting from the right, the composite function evaluates each function and passes the result as the first argument to the next function. The result of the leftmost function is the result of the whole.

```javascript
function a( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, 2*x );
    }
}

function b( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x+3 );
    }
}

function c( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x/5 );
    }
}

var f = composeAsync( c, b, a );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 3
}

f( 6, done ); // ((2*x)+3)/5
```

The last argument provided to each composed function is a `next` callback which accepts two arguments:

-   `error`: error argument
-   `result`: function result

**Only** the rightmost function is explicitly permitted to accept multiple arguments. All other functions are evaluated as **binary** functions.

```javascript
function a( x, y, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, (x*5) + (y*3) );
    }
}

function b( r, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, r+12 );
    }
}

var f = composeAsync( b, a );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 50
}

f( 4, 6, done );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function will throw if provided fewer than `2` input arguments.
-   If a composed function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   Execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import composeAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-compose@esm/index.mjs';

function a( x, y, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x*y );
    }
}

function b( z, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, z+5 );
    }
}

function c( r, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, r/10 );
    }
}

var f = composeAsync( c, b, a );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 2
}

f( 5, 3, done );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-compose`][@stdlib/utils/compose]</span><span class="delimiter">: </span><span class="description">function composition.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-compose.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-compose

[test-image]: https://github.com/stdlib-js/utils-async-compose/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/utils-async-compose/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-compose/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-compose?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-compose.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-compose/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-compose/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-async-compose/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-async-compose/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-async-compose/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-async-compose/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-async-compose/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-async-compose/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-compose/main/LICENSE

[function-composition]: https://en.wikipedia.org/wiki/Function_composition_%28computer_science%29

<!-- <related-links> -->

[@stdlib/utils/compose]: https://github.com/stdlib-js/utils-compose/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
