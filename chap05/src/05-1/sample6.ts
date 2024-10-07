console.clear()
console.group("src/05-1/sample6.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

6. Applying De-structuring Assignment to an Array

(1) De-structuring Assignment can apply to an Array, also an Object.                <--- ***

(2) But Unlike Using symbol, "{}" for an Object,                                    <--- ***
    The de-structuring assignment sentence statement uses "Index Operator", '[]'.     <--- ***

(3) Example for an Array:

    let array: number[] = [ 1, 2, 3, 4, 5 ]
    let [ first, second, third, ...rest ] = array
    
    console.log(first, second, third, rest)         // 1 2 3 [ 4, 5 ]
`, '\n')


// Applying De-structuring Assignment to an Array.

let numberArr: number[] = [ 1, 2, 3, 4, 5 ]
let [ first, second, third, ... rest ] = numberArr

console.log(first, second, third, rest, '\n')       // 1 2 3 [ 4, 5 ]



console.groupEnd()



