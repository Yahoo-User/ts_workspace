console.clear()
console.group("src/09-2/sample5.ts")

console.debug(`
***********************************************************
* 09-2. Basic Usage of "ramda"                            *
***********************************************************

2. "R.tap" Debugging Function

(1) If creating complex functions, Use "Function Composition" mentioned in chap08.

    - This time, make a complex function exploring 
      how the value changed "step by step".             <--- ***

      * Mostly, Use this proess 
        - When the designed function do *NOT* act accoding to our expectation.
        - When debugging where logical error occurred.

(2) For (1), "ramda" library provides "R.tap" high-order(2nd) function 
    to inspect the current value.                       <--- ***

    - Syntax: (a → *) → a → a

    - Description: 
        ○ Runs the "given function" with the "supplied object", then returns "the object".
        ○ Acts as a "transducer" if a "transformer" is given as "second" parameter.

    - Example:

        const sayX = x => console.log('x is ' + x);
        R.tap(sayX, 100); // => 100

        // logs 'x is 100'
`, '\n')


// -----------------------------
// 1. Print "content" of an "Array" with "R.range" printed to console with "R.tap" function.
// -----------------------------

import * as R from "ramda"


const cb1 = obj => console.log("cb1:", obj, '\n')     // OK
const cb2 = console.log                         // OK

function cb3(array: number[]): void {           // OK 
    console.debug("* cb3(%s) invoked", array, '\n')
    console.log('cb3:', array.map((item) => item + 1), '\n')
} // callback

const cb4 = obj => console.log('cb4:', 'obj is ' + obj);

const numbers: number[] = R.range(1, 7 + 1)

R.tap(cb1)(numbers),                        // OK, cb1: [ 1, 2, 3, ..., 7 ]
R.tap(cb2, numbers),                        // OK, cb2: [ 1, 2, 3, ..., 7 ]
R.tap(cb3, numbers),                        // OK, cb3: [ 1, 2, 3, ..., 7 ]
R.tap(cb4, 100),                            // OK, cb4: obj is 100

R.tap(a => console.log("cb5:", "Hello,", a), "Yoseph"), // OK, cb5: Hello, Yoseph
R.tap(a => console.log("cb6:", a * 2), 4),  // OK, cb6: 8


console.groupEnd()


