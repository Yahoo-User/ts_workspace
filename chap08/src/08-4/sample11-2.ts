import { pipe } from "./sample8-1";
import { squaredMap } from "./sample11-1";


console.clear()
console.group("src/08-4/sample11-2.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

5. Pointless Function
`, '\n')
    

// -----------------------------------------
// Array<Function>.reduce<any>(
//      callbackfn: (previousValue: any, currentValue: Function, currentIndex: number, array: Function[]) => any,
//      initialValue: any
// ): any
// -----------------------------------------
// Calls the specified "callback" function for all the elements in an "Array".
// The "return value" of the "callback" function is the "*accumulated*" result, 
// and is provided as an "argument" in the "*next call*" to the "callback" function.
//
// @param "callbackfn"   - A "function" that accepts up to "*four*" arguments.
//                         The "reduce" method calls the "callbackfn" function "one" time for "*each*" element in the array.
// @param "initialValue" - If initialValue is specified, it is used as the "initial value" to start the "accumulation".
//                         The "*first*" call to the "callbackfn" function provides this value as an "argument"
//                         instead of an "array" value.
// -----------------------------------------


// -----------------------------
// 3. The following code shows that the "Poinless Function", "squaredMap"
//    acts as the target of normal "Function Composition".
// -----------------------------

const fourSqaure = pipe(
    squaredMap,            // Pointless Function, 1st-Order Function, arity: 1
    squaredMap             // Pointless Function, 1st-Order Function, arity: 1
)

/*
    fourSqaure:

    function (x) {
        console.debug("* pipe(functions: %s, x: %s) invoked.", functions, x);
        return functions.reduce(function (value, func) { return func(value); }, x);
    }
*/
console.log("3. fourSqaure:\n\n%s", fourSqaure, '\n')

// -----------------------------------------

console.log(
    '\t',
    fourSqaure([ 3, 4 ]),    // [ 3, 4 ] ~> squaredMap ~> [ 9, 16 ] ~> squaredMap ~> [ 81, 256 ]
    '\n'
)


// -----------------------------
// 4. Pointless Function Examples
// -----------------------------

// -----------------------------
// 4-1. Declare a Pointless Function using "Array.reduce" method.
// -----------------------------

// High-Order(2nd-order) function
export
const reduce = (cb, initValue) => arr => arr.reduce(cb, initValue) // OK
// const reduce = <T>(cb: (accumulated: T, value: T) => T, initValue: T) => (arr: T[]): T => arr.reduce(cb, initValue) // OK

// reduce: function (cb, initValue) { return function (arr) { return arr.reduce(cb, initValue); }; }
console.log("4-1. reduce: %s", reduce, '\n')

// -----------------------------------------

const cb1 = (accumulated: number, value: number) => accumulated + value
const cb2 = (accumulated: number, value: number) => accumulated * value
const cb3 = (accumulated: string, value: string) => accumulated + value

const initialValue: number = 1
const initialValue2: string = ""

console.log(
    '\t',
    // OK 7, [ 1, 2, 3] ~> reduce(cb1, 1) ~> 1 + 1 + 2 + 3 = 7
    reduce(cb1, initialValue)([ 1, 2, 3 ]),

    // OK 6, [ 1, 2, 3] ~> reduce(cb2, 1) ~> 1 * 1 * 2 * 3 = 6  
    reduce(cb2, initialValue)([ 1, 2, 3 ]),

    // OK "ABC", [ "A", "B", "C" ] ~> reduce(cb3, "") ~> "" + "A" + "B" + "C" = "ABC"
    reduce(cb3, initialValue2)( [ "A", "B", "C" ] ),
    '\n'
)


// -----------------------------
// 4-2. Declara a Pointless Function with "Generic Types".
// -----------------------------

export
const reduce2 = <T>(cb: (accumulated: T, value: T) => T, initValue: T) => (arr: T[]): T => arr.reduce(cb, initValue) // OK

// reduce2: function (cb, initValue) { return function (arr) { return arr.reduce(cb, initValue); }; }
console.log("4-2. reduce2: %s", reduce2, '\n')

// -----------------------------------------

const cb4 = (accumulated: number, value: number) => accumulated - value
const initialValue3: number = 0

console.log(
    '\t',
    reduce2(cb4, initialValue3)([ 1, 2, 3 ]),   // OK, -6, [ 1, 2, 3 ] ~> reduce2(cb4, 0) ~> 0 - 1 - 2 - 3 = -6
    '\n'
)


// -----------------------------
// 4-3. Declare a Pointless Function using the above function.
// -----------------------------

const cb5 = (accumulated: number, value: number) => accumulated + value
const initialValue4: number = 0

export
const sumArray = reduce(cb5, initialValue4)

// sumArray: function (arr) { return arr.reduce(cb, initValue); }
console.log("4-3. sumArray: %s", sumArray, '\n')

// -----------------------------------------

console.log(
    '\t',

    // OK, 55, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ~> sumArry ~> 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
    sumArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]),
    
    '\n'
)


// -----------------------------
// 4-4. Pythagoras' theorem
// -----------------------------

const pythagoras = pipe(
    // All sub functions's arity is 1.
    
    squaredMap,     // Pointless Function, 1st-Order Function
    sumArray,       // 1st-Order Function
    Math.sqrt       // 1st-Order Function
)

// console.log("4-4. pythagoras:\n\n%s", pythagoras, '\n')

// -----------------------------------------

console.log(
    '\t',
    pythagoras([3, 4]),     // 5, [3, 4] ~> squareMap ~> [ 9, 16 ] ~> sumArray ~> 25 ~> Math.sqrt ~> 5
    '\n'
)









console.groupEnd()

