import { range } from "../05-1/sample13-1";
import { filter } from "./sample18-1";
import { fold } from "./sample16-1";

console.clear()
console.group("src/05-2/sample18-2.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

5. "filter": Filtering only items satisfied with a provided condition
`, '\n')


// ------------------------
// 1st. method - in way of "Imperative" Programming.
// ------------------------
// const isOdd = (item: number, index?: number): boolean => {               // OK: filter condition
//     console.log(`isOdd(item: ${item}, index: ${index}) invoked.`)
//     return item % 2 != 0
// } // isOdd

// ------------------------
// 2nd. method - in way of "Declarative" Programming.
// ------------------------
const isOdd = (item: number, index?: number): boolean => item % 2 != 0      // OK
// const isOdd = (item, index?) => item % 2 != 0                               // OK
// const isOdd = (item) => item % 2 != 0                                       // OK
// const isOdd = item => item % 2 != 0                                         // OK


// const callback = (result: number, item: number): number => result + item    // OK
const callback = (result: number, item: number): number => result += item   // OK


let numbers: number[] = range(1, 100 + 1)                   // Half-Open
let result = fold( filter<number>(numbers, isOdd), callback, 0)

console.log(result, '\n')             // 2500



console.groupEnd()


