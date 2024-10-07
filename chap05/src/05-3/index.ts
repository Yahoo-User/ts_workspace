console.clear()
console.group("src/05-3/index.ts")

console.debug(`
*************************************************
* 05-3. Array's "map", "reduce", "filter" methods
*************************************************

0. Background

(1) In 04-6, Understanding of a class's "method chain".
(2) An "Array" is also designed to work in way of "Method Chaining" like (1)
`, '\n')


// The following codes working in way of traditional "method chaining" will be often seen.

// 1. "Declarative" callback.
const reduceCallback = (previousValue: number, currentValue: number) => previousValue * currentValue

// 2. "Imperative" callback.
// const reduceCallback = (previousValue: number, currentValue: number) => {
//     console.debug('reduceCallback(%d, %d) invoked.', previousValue, currentValue)
//     return previousValue * currentValue
// } // Anonymous Function == Function Expression

// 3. "Imperative" callback with all valid parameters
// const reduceCallback = (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => {
//     console.debug("reduceCallback(%d, %d, %d, %s) invoked.", previousValue, currentValue, currentIndex, array)
//     return previousValue * currentValue
// } // Anonymous Function == Function Expression

let numberTypeArray: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(numberTypeArray)


let tempResult = 
    numberTypeArray.

        // filter( (item: number, index: number, array: number[]) => item % 2 != 0 ).
        filter( item => item % 2 != 0 ).    // Filtering only odd numbers: 1, 3, 5, ..., 9

        // map( (item: number, index: number, array: number[]) => item * item ).
        // map( (item) => item * item ).       // OK
        map( item => Math.pow(item, 2) ).   // OK

        // Purpose: Calls the specified `callback` function for all the elements in an array.
        //          The return value of the `callback` function is the "accumulated" result, 
        //          and is provided as an argument in the next call to the callback function.
        // A function that accepts up to four arguments. 
        // The "reduce" method calls the `callbackfn` function `one time` for `each element` in the array.
        // Method Signature: 
        //      reduce(
        //          callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number,
        //          initialValue: number
        //      )
        reduce(reduceCallback, 1)


let result = Math.round( Math.sqrt(tempResult) )

console.log('\n\b', tempResult, Math.sqrt(tempResult))      // 893025 945
console.log(result, '\n')                                   // 945




console.groupEnd()


