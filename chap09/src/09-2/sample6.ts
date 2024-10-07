console.clear()
console.group("src/09-2/sample6.ts")

console.debug(`
***********************************************************
* 09-2. Basic Usage of "ramda"                            *
***********************************************************

3. "R.pipe" Function

(1) "ramda" package provides "R.compose" & "R.pipe" functions compared
    compared with each "compose" & "pipe" functions in chap08.                      <--- ***

    - Compared with "pipe" function, "R.pipe" functions is more comprehensive.
    - Thus, when combining functions, "R.pipe" function will be used from now on.
`, '\n')


// -----------------------------
// 1. "R.pipe" function is used to "Function Composition".
// -----------------------------

import * as R from "ramda"

/*
    R.pipe
    ( ( (a, b, …, n) → o), (o → p), …, (x → y), (y → z) ) → ( (a, b, …, n) → z )

    PARAMETERS  - functions
    Returns     - function

    a. Performs "left-to-right" function composition.
    b. The "first" argument may have any arity; the "remaining" arguments must be "unary".  <--- ***
    c. In some libraries this function is named "sequence".

    Note: The result of pipe is *NOT* automatically curried.

    @example
        const f = R.pipe( Math.pow, R.negate, R.inc );

        f(3, 4);    // f(3, 4) ~> Math.pow(3, 4) ~> R.negate ~> -(3^4) ~> R.inc ~> -(3^4) + 1
*/

// -----------------------------------------

const numbers: number[] = R.range(1, 9 + 1)
const person: { name: string; age: number } = { name: "Yoseph", age: 23 }

R.pipe( R.tap(arr => console.log("cb1:", arr)) )(numbers)   // OK, cb1: [ 1, 2, ..., 9 ]
R.pipe( R.tap(obj => console.log("cb2:", obj)) )(person)    // OK, cb2: { name: 'Yoseph', age: 23 }

const cb = console.log

R.pipe( R.tap )(cb, numbers)                                // OK, [ 1, 2, ..., 9 ]
R.pipe( R.tap(cb) )(numbers)                                // OK, [ 1, 2, ..., 9 ]

// R.pipe( R.tap )(cb)(numbers)                                // XX, ts(2554) - Expected 2 arguments, but got 1.
// R.pipe( R.tap(null) )({ name: "Trinity", age: 24 })         // XX, fn(x); TypeError: "fn" is not a function
// R.pipe( R.tap(arr => console.log(arr)) )(1, 2, 3)           // XX, error - TS2554: Expected 1 arguments, but got 3.



console.groupEnd()


