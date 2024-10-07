import { range } from "../05-1/sample13-1";


console.clear()
console.group("src/05-3/sample23.ts")

console.debug(`
*************************************************
* 05-3. Array's "map", "reduce", "filter" methods
*************************************************

2. "map" Method

(1) When an Array type is "T[]", Array's "map" method is designed to the following:

    - Method Signature:

        map(callback: (value: T, index?: number) => Q): Q[]
`, '\n')


// 1. The following code re-impements map function using Array's "map" method.

let squares: number[] = range(1, 5 + 1)
console.log("1.", squares, '\n')        // [ 1, 2, 3, 4, 5 ]

squares = squares.map( (value) => Math.pow(value, 2) )
console.log("2.", squares, '\n')        // [ 1, 4, 9, 16, 25 ]

// -----------------------------------------

// 2. Processing "number[]" -> "string[]".

let names: string[] = range(1, 5 + 1).map( (item, index) => `[${index}]: ${item}` )

console.log('3.', names, '\n')          // [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]



console.groupEnd()


