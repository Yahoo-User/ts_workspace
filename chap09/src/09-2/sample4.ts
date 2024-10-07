console.clear()
console.group("src/09-2/sample4.ts")

console.debug(`
***********************************************************
* 09-2. Basic Usage of "ramda"                            *
***********************************************************

1. "R.range" Function

(1) Syntax, according to the following form :

        R.range(min, max)

    - Here, The "R.range" function creates an Array
      like [ min, min + 1, ..., max - 1 ]. (Half-Open)
`, '\n')


// -----------------------------
// 1. The following code shows that
// the example creates an Array with [ 1, 2, ..., 9 ] Using "R.range" functions.
// -----------------------------

import * as R from "ramda"

// -----------------------------------------

console.log(
    'Array: %s',
    R.range(1, 9 + 1),       // OK, [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    '\n'
)


console.groupEnd()


