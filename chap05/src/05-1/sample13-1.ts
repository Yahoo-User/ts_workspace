console.clear()
console.group("src/05-1/sample13-1.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

13. Implementation of a Range Function

(1) In 02-2, External package "ramda" provides "R.range" function. (*Half-Open*)

    - To create an "Array" that has all numbers between 'from' and 'to - 1' as items.

(2) A function like "R.range" can be implemented easily
    if "spread operator" applys to an "Array".  (***)

    - Example: 
    
        const range = (from: number, to: number): number[] => 
                            from < to ? [ from, ...range(from + 1, to) ] : []
`, '\n')


// With Recursive Function Style.

export
const range = (from: number, to: number): number[] => 
                    from < to ? [ from, ...range(from + 1, to) ] : []

/*
    // Anonymous Function == Function Expression -> First-class Function

    function (from, to) {
        return from < to ? 
                __spreadArray( [from], __read( (0, exports.range) (from + 1, to) ), false ) : [];
    }
*/
console.log('range:\n\n%s', range)



console.groupEnd()


