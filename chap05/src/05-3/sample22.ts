import { range } from "../05-1/sample13-1";


console.clear()
console.group("src/05-3/sample22.ts")

console.debug(`
*************************************************
* 05-3. Array's "map", "reduce", "filter" methods
*************************************************

1. "filter" Method

(1) When an Array type is "T[]", Array's "filter" method is designed to the following:

    - Method Signature:
        filter(callback: (item: T, index?: number) => boolean): T[]
`, '\n')


// 1. Re-implement filtering with Array's "filter" method
const numbers: number[] = range(1, 100 + 1)
console.log(numbers,'\n')

let odds: number[] = numbers.filter( (value) => value % 2 != 0 )
let even: number[] = numbers.filter( (value) => value % 2 == 0 )

console.log("odds: %s,\neven: %s", odds, even)

// -----------------------------------------

// 2. Using "filter" method's second parameter, "index?" optional property.

const numbers2: number[] = range(1, 9 + 1)
console.log(numbers2, '\n')

const half = numbers2.length / 2
console.log("half: %d", half)       // half: 4.5

// const cb = (value: number, index?: number): boolean => {
//     console.debug("cb(%d, %d) invoked.", value, index)
//     return index >= half
// } // cb

let belowHalf: number[] = numbers2.filter( (value, index) => index < half )
let aboveHalf: number[] = numbers2.filter( (value, index) => index >= half )

// let aboveHalf: number[] = numbers2.filter( cb )

console.log(belowHalf, aboveHalf)   // [ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9 ]





console.groupEnd()


