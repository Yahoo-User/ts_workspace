import { mergeArray } from "./sample32-1";

console.clear()
console.group("src/05-4/sample32-2.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

8. Variadic Arguments Function and Pure Function
`, '\n')


const mergedArray1: string[] = mergeArray<string>( [ "Hello" ], [ "World" ] )
console.log(mergedArray1)       // [ 'Hello', 'World' ]

// -----------------------------------------

const mergedArray2: number[] = mergeArray<number>( [ 1 ], [ 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9, 10 ] )
console.log(mergedArray2)       // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]



console.groupEnd()



