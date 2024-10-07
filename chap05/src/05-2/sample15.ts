import { range } from "../05-1/sample13-1";

console.clear()
console.group("src/05-2/sample15.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

2. Problem Solving of Summation Between 1 and 100

(1) By "Imperative" programming style.
    - Use "for" statement.
    - Data & Processing executed in "for" statement.    <--- ***

(2) By "Declarative" programming style.
    - Distinguish between data generation and data processing.
    - "fold" function known to the "Functional" programming used
      for summation of all items in an Array.           <--- ***
`, '\n')


// 1. Solving problem by "Imperative" programming style.
let sum = 0
for(let val = 1; val <= 100; )
    sum += val++

console.log(sum, '\n')        // 5050


// 2. Solving problem by "Declarative" programming style.
let numbers: number[] = range(1, 100 + 1)
console.log(numbers, '\n')    // [ 1, 2, ..., 100 ]

// Next, Sum all items in the above "Array".
// For processing, used "fold" function well-known to the "Functional" programming. <--- ***



console.groupEnd()


