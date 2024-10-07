console.clear()
console.group("src/06-1/sample3.ts")

console.debug(`
*************************************************
* 06-1. Understanding a Iterator                *
*************************************************

3. Why is the "iterator" necessary ?

(1) In 06-1-2, Whenever invoking "iterator.next" method repeatedly, other value printed.
    - This values printed like using "for" loop, 
      *NOT* saving all generated values by "iterator" into an Array.
    - Like this, "iterator" generates a value *ONLY* when a value belongs to a range needed. <--- ***
`, '\n')


// 1. In 05, "range" function.

export
const range = (from: number, to: number) => from < to ? [ from, ...range(from + 1, to) ] : []

/*
    function (from, to) { 
        return from < to ? __spreadArray([from], __read((0, exports.range)(from + 1, to)), false) : []; 
    }
*/
console.log("range:\n\n%s", range)

console.log(range(1, 7 + 1), '\n')  // [ 1, 2, 3, 4, 5, 6, 7 ]

// -----------------------------------------

// 2. In 06-1, "iterator" generate a value when new value acquired,
//    But "range" function generates all values prior to the point of a value acquired.
//    Thus, From the side of system resources effectiveness,
//    "iterator" function consumes system resources smaller than "range" function.



console.groupEnd()


