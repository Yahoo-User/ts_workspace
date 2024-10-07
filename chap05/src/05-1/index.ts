console.clear()
console.group("src/05-1/index.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

0. Background

(1) In JavaScript, Array is an instance of "Array" class.   <--- ***

    - Syntax: let arrayName = new Array(length)

    - If constructor parameter, length > 0, 
      "Empty" items as many as 'length' are already pushed into the Array. (***)

(2) Item or Element : Each value stored in an Array.
`, '\n')


// 1st. method

// let array = new Array           // OK - []
// let array = new Array()         // OK - []
// let array = new Array(10)       // OK - [ <10 empty items> ]

// array.push(1); array.push(2); array.push(3)

// -----------------------------------------

// 2nd. method

// let arr = new Array           // OK - []
// let arr = new Array()         // OK - []
let arr = new Array(10)       // OK - [ <10 empty items> ]

let array = ( arr.push(1), arr.push(2), arr.push(3), arr )

// -----------------------------------------

// Common Routines

console.log(array)              // [ 1, 2, 3 ]

/*
    1. If let array = new Array           // OK - []
       If let array = new Array()         // OK - []
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │    0    │   1    │
    │    1    │   2    │
    │    2    │   3    │
    └─────────┴────────┘

    2. If let array = new Array(10)       // OK - [ <10 empty items>, 1, 2, 3 ]
    ┌─────────┬────────┐
    │ (index) │ Values │
    ├─────────┼────────┤
    │   10    │   1    │
    │   11    │   2    │
    │   12    │   3    │
    └─────────┴────────┘
*/
console.table(array)



console.groupEnd()


