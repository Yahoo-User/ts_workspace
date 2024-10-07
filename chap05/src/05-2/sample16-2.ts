import { range } from "../05-1/sample13-1";
import { fold } from "./sample16-1";

console.clear()
console.group("src/05-2/sample16-2.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

3. 'fold': Folding Array's Data

(4) Summation of 1..100 by using "fold" function in way of "Declarative Programming".
    - "Imperative Programming" thinks of system resources effectiveness in the top-most.
    - "Declarative Programming" solves a problem 
       by reusing 'general-purposed' like "fold" (or language-provided) function.
`, '\n')


// 1. Generate Input Data.
let numbers: number[] = range(1, 100 + 1)   // Half-Open
console.log(numbers)                        // [ 1 ... 100 ]

// -----------------------------------------

// 2. Processing Input Data & Generate Output Data
let result = fold(numbers, (result, item) => result + item, 0)      // OK

/* 
    const callback = function (result: number, item: number): number {
        console.debug("callback(%d, %d) invoked.", result, item)

        return result + item    // OK
        // return result += item   // OK
    } // Anonymous Function = Function Expression -> First-class Function

    let result = fold(numbers, callback, 0)                             // OK
 */

// -----------------------------------------

// 3. Print Output Data
console.log(result)         // 5050



console.groupEnd()


