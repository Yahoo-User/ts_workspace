console.clear()
console.group("src/05-1/sample5.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

5. Index Operator

(1) To get an item in the Array, Use "Index Operator".
(2) Index Operator gets an item located in the specified index.
(3) Example:

    const numbers: number[] = [ 1, 2, 3, 4, 5 ]
    for(let index = 0; index < numbers.length; index++) {
        const item: number = numbers[index]
        console.log(item)       // 1 2 3 4 5
    } // for
`, '\n')


// To get an item using `Index Operator`.

const numberArray: number[] = [ 1, 2, 3, 4, 5 ]

for(let item of numberArray) {
    console.log(item)
} // for-of



console.groupEnd()


