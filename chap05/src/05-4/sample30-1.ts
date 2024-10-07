console.clear()
console.group("src/05-4/sample30-1.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

6. Implementation of Array's "sort" Method As a Pure Function

(1) Array class provides "sort" method to ascend or descend all items of an Array.

(2) Then Array's "sort" method change an original Array. --> "Impure Function".         <--- ***

(3) A function can keep an input array "immutable" with "readonly" type modifier
    and sort it using the feature of "Deep Copy" with "Spread Operator".                <--- ***
`, '\n')


// 1. The following function can keep an Array "immutable" using "readonly" type modifier
//    and sort it with the feature of "Deep Copy" using "Spread Operator".

export
const pureSort = <T>(array: readonly T[]): T[] => {
    console.debug("pureSort(%s) invoked.", array)

    let deepCopied = [ ...array ]
    
    // --------------
    // 1st. method
    // --------------
    return deepCopied.sort()         // OK but is a [ 14, 2, 27, 3, 31, 48 ] in correct ???

    // --------------
    // 2nd. method
    // --------------
    // error ts(2362) - The left-hand side of an arithmetic operation must be 
    //                  of type 'any', 'number', 'bigint' or an enum type.
    // return deepCopied.sort((a, b) => a - b)                          // XX
    // return deepCopied.sort((a: T, b: T): number => a - b)            // XX

    // return deepCopied.sort((a: any, b: any) => a - b)                // OK, Ascending,  [ 2, 3, 14, 27, 31, 48 ] 
    // return deepCopied.sort((a: any, b: any): number => a - b)        // OK, Ascending,  [ 2, 3, 14, 27, 31, 48 ] 
    // return deepCopied.sort((a: any, b: any): number => b - a)        // OK, Descending, [ 48, 31, 27, 14, 3, 2 ]

    // --------------
    // 3rd. method
    // --------------
    // error ts(2362) - Parameter 'a' implicitly has an 'any' type,
    //                  but a better type may be inferred from usage.
    // (parameter) a: T, (parameter) b: T
    // const compareFn = (a: T, b: T) => a - b              // XX
    // const compareFn = (a: T, b: T): number => a - b      // XX

    // (parameter) a: any, (parameter) b: any
    // const compareFn = (a, b) => a - b                    // OK, Ascending,  [ 2, 3, 14, 27, 31, 48 ]
    // const compareFn = (a, b): number => a - b            // OK, Ascending,  [ 2, 3, 14, 27, 31, 48 ]
    // const compareFn = (a: any, b: any) => a - b          // OK, Ascending,  [ 2, 3, 14, 27, 31, 48 ]
    // const compareFn = (a: any, b: any): number => a - b  // OK, Ascending,  [ 2, 3, 14, 27, 31, 48 ]
    // const compareFn = (a: any, b: any): number => b - a  // OK, Descending, [ 48, 31, 27, 14, 3, 2 ]

    // return deepCopied.sort(compareFn)   // OK [ 2, 3, 14, 27, 31, 48 ]
} // pureSort

/*
    // Anonymous Function == Function Expression -> First-class Function

    function (array) {
        console.debug("pureSort(%s) invoked.", array);
        var deepCopied = __spreadArray([], __read(array), false);

        // return deepCopied.sort();        // OK but [ 14, 2, 27, 3, 31, 48 ] ???

        var compareFn = function (a, b) { return a - b; };
        return deepCopied.sort(compareFn);  // OK [ 2, 3, 14, 27, 31, 48 ]
    }
*/
console.log("pureSort:\n\n%s", pureSort, '\n')

// -----------------------------------------

// 2. Test of "pureSort" function

console.log(exports.pureSort, '\n')                             // [Function: pureSort]
console.log(exports.pureSort([ 3, 31, 14, 2, 48, 27 ]), '\n')   // [ 14, 2, 27, 3, 31, 48 ]



console.groupEnd()


