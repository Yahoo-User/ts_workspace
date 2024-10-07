import { range } from "../05-1/sample13-1";


console.clear()
console.group("src/05-3/sample24.ts")

console.debug(`
*************************************************
* 05-3. Array's "map", "reduce", "filter" methods
*************************************************

3. "reduce" Method

(1) "fold" function in 05-2 could be replaced with TypeScript's "reduce" method.

(2) When an Array's type is "T[]", Array's "reduce" method is designed to the following:

    - Method Signature:

        reduce<U>(callback: (result: U, value: T) => U, initialValue: U): U
`, '\n')


// 1. Re-implement 1 + 2 + 3 + ... + 100 with Array's "reduce" method.

let reducedSum = range(1, 100 + 1).reduce<number>( (result, value) => result + value, 0 )

console.log(reducedSum)     // 5050

// -----------------------------------------

// 2. Multiply all items of an Array using Array's "reduce" method.

let reducedMul = range(1, 10 + 1).reduce<number>( (result, value) => result * value, 1 )

console.log(reducedMul)     // 3628800



console.groupEnd()



