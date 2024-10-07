import { range } from "../05-1/sample13-1";

console.clear()
console.group("src/05-2/sample18-1.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

5. "filter": Filtering only items satisfied with a provided condition

(1) In the "Functional Programming", "filter" function does
    - process an input array.
    - filter the only items satisfied with the condition.

(2) Example:
    - There is an Array, [ 1, 2, 3, ..., 100 ]
    - Filter Condition : item % 2 != 0
    - Return *NEW* Array.
    - All items satisfied with the filter condition are the elements of an *NEW* Array.
`, '\n')


// To filter an Array to generate a new Array only has "odd" items.
// Filter condition is (item % 2 != 0).

export
const filter = <T>( array: T[], callback: (item: T, index?: number) => boolean ) => {
        console.debug("filter( %s, %s ) invoked.", array, callback)
        
        let result: T[] = []

        // ------------------------
        // 1st. method
        // ------------------------
        // for(let index=0; index < array.length; ++index) {
        //     const item = array[index]

        //     if(callback(item, index)) {
        //         result = [ ... result, item ]
        //     } // if
        // } // classical for

        // ------------------------
        // 2nd. method
        // ------------------------

        // The left-hand side of a 'for...in' statement must be of type 'string' or 'any'.  <--- ***
        // for(let index in array) {       // typeof index: string (***)
        //     const item = array[index]

        //     // All JavaScript numbers are 64-bit floating-point numbers.                 <--- ***
        //     if( callback(item, Number.parseInt(index)) ) {
        //         result = [ ...result, item ]
        //     } // if
        // } // for...in

        // ------------------------
        // 3rd. method
        // ------------------------
        for(let item of array) {
            if(callback(item)) {
                result = [ ...result, item ]
            } // if
        } // for...of

        
        return result
} // filter


// -------------------------
// For test.
// -------------------------
const oddArray = filter<number>(range(1, 20 + 1), (item: number, index: number) => {
    console.log(`callback(item: ${item}, index: ${index}) invoked.`)
    return item % 2 != 0
})

console.log(oddArray)



console.groupEnd()


