console.clear()
console.group("src/05-4/sample32-1.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

8. Variadic Arguments Function and Pure Function

(1) Variadic Arguments: When invoking a function, No passed arguments limited.      <--- ***
(2) Variadic Arguments Function : A function with variadic arguments.               <--- ***

(3) If considering "Pure Function,
    Many functions provided by JavaScript Array could *NOT* be used.
    - These Array's methods could be implemented using "Spread & Rest" operators.   <--- ***
`, '\n')


// 1. A function merging variadic arrays in way of "Pure Function" 
//    using "readonly" type modifier and "Spread & Rest Operator".

export
// To receive variadic arguments of T[], "Rest Operator" to a parameter required.       (***)
// onsider "Pure Function", "readonly" type modifier should be attached 
// to keep a parameter immutable. (***)
const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
    console.debug("mergeArray(%s) invoked.", arrays)

    let result: T[] = []

    for(let array of arrays) {
        // console.log('\t+ %s', array)

        // Using "Spread Operator", all parameters as Arrays are merged in "one" Array.
        result = [ ...result, ...array ]
    } // for...of

    return result
} // mergeArray

// -----------------------------------------

const mergedArray = mergeArray<number>([1], [2], [3], [4], [5])         // OK   [ 1, 2, 3, 4, 5 ]
// const mergedArray = mergeArray<string>([ "Hello" ], [ "World" ])        // OK    [ 'Hello', 'World' ]

console.log(mergedArray)



console.groupEnd()



