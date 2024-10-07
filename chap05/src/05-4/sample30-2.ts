import { pureSort } from "./sample30-1";


console.clear()
console.group("src/05-4/sample30-2.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

6. Implementation of Array's "sort" Method As a Pure Function
`, '\n')


let beforeSort = [ 3, 31, 14, 2, 48, 27 ]
const afterSort = pureSort(beforeSort)

console.log(beforeSort, afterSort)  // [ 3, 31, 14, 2, 48, 27 ] [ 14, 2, 27, 3, 31, 48 ]



console.groupEnd()


