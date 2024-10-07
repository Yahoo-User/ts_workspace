console.clear()
console.group("src/08-4/sample11-1.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

5. Pointless Function

(1) What is a "Pointless Function" ?                                                <--- ***
    - A function designed for "Function Composition".                               <--- ***

(2) The following "map" function is designed to consider "Function Composition".    <--- ***

        export const map = f => a => a.map(f)   // High-Order(2nd-Order) Function.

    - Above "map" function could be implemented by "Generic Function" like the following,
      But "Function Composition" code omits the "Type Annotations",                 <--- ***
      It's more easily readable for compiler to infer types.

        export const map = <T, R>(f: (T) => R) => (a: T[]): R[] => a.map(f)

(3) If making a "partial function" like "map(f)",
    It could be used with "compose" or "pipe" functions for "Functon Composition".
`, '\n')


/*
    -------------------------------------------------------
    Array<number>.map<number>(
        cb: (value: number, index: number, array: number[]) => number, 
        thisArg?: any
    ): number[]
    -------------------------------------------------------
    Calls a defined "callback" function on "each" element of an Array, 
    and returns an "Array" that contains the "results".

    @param cb - A function that accepts up to three arguments.
                The "map" method calls the "cb" function "one time" for "each" element in the Array.

    @param thisArg - An object to which the this keyword can refer in the "cb" function.
                     If "thisArg" is "omitted", "undefined" is used as the this value.
*/


// -----------------------------
// 1. Example of a "Pointless Function"
// -----------------------------

// High-order(2rd) function.
export
const map = <T>(cb: (value: T) => T) => (arr: T[]) => arr.map(cb)       // OK

// map: function (cb) { return function (arr) { return arr.map(cb); }; }
console.log("1. map: %s", map, '\n')

// -----------------------------------------

const cb1 = (value: number) => value * 10
const cb2 = (value: string) => value + ", Yoseph"

console.log(
    '\t',
    map(cb1)([1, 2, 3]),            // OK [ 10, 20, 30 ]
    map(cb2)([ "a", "b", "c" ]),    // OK [ 'a, Yoseph', 'b, Yoseph', 'c, Yoseph' ]
    '\n'
)


// -----------------------------
// 2. The following code show the meaning of "Pointless".
// -----------------------------

const cb3 = (value: number) => value * value

// 1st-Order Function
export
const squaredMap = map(cb3)              // Pointless Function

// squaredMap: function (arr) { return arr.map(cb); }
console.log("2-2. squaredMap: %s", squaredMap, '\n')

// -----------------------------------------

console.log(
    '\t',
    squaredMap([ 1, 2, 3 ]),        // OK [ 1, 4, 9 ]
    '\n'
)

// -----------------------------------------

const cb4 = (value: number) => Math.pow(value, 3)

// General Function
export
const squaredMap2 = arr => map(cb4)(arr)      // Point Function

// squaredMap2: function (arr) { return (0, exports.map)(cb4)(arr); }
console.log("2-3. squaredMap2: %s", squaredMap2, '\n')

// -----------------------------------------

console.log(
    '\t',
    squaredMap2([1, 2, 3]),         // OK [ 1, 8, 27 ]
    '\n'
)



console.groupEnd()

