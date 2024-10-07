import { range } from "../05-1/sample13-1";
import { fold } from "./sample16-1";
import { filter } from "./sample18-1";

console.clear()
console.group("src/05-2/sample19.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

6. Problem Solution of All Even Numbers Summation Between 1 and 100

(1) Solving Problem in way of "Imperative Programming".
(2) Solving Problem In way of "Declarative Programming".
`, '\n')


// -----------------------------------------
// 1. Solving Problem in way of "Imperative Programming".
// -----------------------------------------

let evenSum: number = 0

for(let value: number = 0; value <= 100; value += 2)
    evenSum += value

// -----------------------------------------

// let evenSum = fold(
//     filter<number>(range(1, 100 + 1), (item: number) => {
//         console.debug('callback(%s) invoked.', item)
//         return item % 2 == 0
//     }),

//     // (result, item) => result + item,                     // OK
//     // (result, item): number => result += item,            // OK

//     (result, item) => {                                 // OK
//         console.debug("callback(%d, %d) invoked.", result, item)
//         return result += item
//     },

//     0
// )

console.log(evenSum, '\n')        // 2550


// -----------------------------------------
// 2. Solving Problem In way of "Declarative Programming".
// -----------------------------------------

// const isEven = (item: number, index?: number) => item % 2 == 0       // OK
// const isEven = (item, index?) => item % 2 == 0                       // OK
// const isEven = (item: number) => item % 2 == 0                       // OK
const isEven = (item) => item % 2 == 0                               // OK
// const isEven = item => item % 2 == 0                                 // OK

let evenSum2 = fold( filter<number>(range(1, 100 + 1), isEven), (result, value) => result + value, 0)   // OK

console.log('\n\b', evenSum2, '\n')       // 2550



console.groupEnd()


