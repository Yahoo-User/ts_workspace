import { NumberToNumberFunc, add3 } from "./sample25-1";

console.clear()
console.group("src/04-4/sample25-2.ts")

console.debug(`
*************************************************
* 04-4. First-Class Function                    *
*************************************************

3. High-order Function & Closure and Partial Function

(4) "Partial" function == "Partial" application == "Partially Applied" function

`, '\n')


console.log(add3)   // [Function: add3]


let fn: NumberToNumberFunc = add3(1)    // Returns 1-D (General) function
console.log('fn: %s', fn)               // fn: Function Expression == Anonymous Function

let resultVal = fn(2)                   // fn: (b: number) => number

console.log(resultVal)                  // 3
console.log( add3(1)(2) )               // 3

// -----------------------------------------

// ** 3-D ** High-Order Function
// const mul = a => b => c => a * b * c                 // OK
// const mul = ( a => ( b => ( c => a * b * c ) ) )     // OK

// const mul: (number) => (number) => (number) => number = a => b => c => a * b * c    // OK
const mul: (a: number) => (b: number) => (c: number) => number = a => b => c => a * b * c    // OK

console.log( mul(1)(2)(3) )

console.log( '\n1. mul: %s', mul )                      // Returns 3-D High-order function.
console.log( '\n2. mul(1): %s', mul(1) )                // Returns 2-D `partial` function.
console.log( '\n3. mul(1)(2): %s', mul(1)(2) )          // Returns 1-D `partial` function.
console.log( '\n4. mul(1)(2)(3): %s', mul(1)(2)(3) )    // Returns a `Scalar` value.



console.groupEnd()


