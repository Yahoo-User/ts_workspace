import { range } from "./sample13-1";

console.clear()
console.group("src/05-1/sample13-2.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

13. Implementation of a Range Function
`, '\n')


let numbers: number[] = range(1, 9 + 1)

console.log(numbers)    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


console.groupEnd()


