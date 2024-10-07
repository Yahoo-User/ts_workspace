console.clear()
console.group("src/05-1/sample12.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

12. Spread Operator

(1) In chap03, Symbol, "..." is the "Spread Operator".

(2) This could apply to an "Array".                             <--- ***
    - Duplicated items are permitted.

(3) This could also apply to an "Object".                       <--- ***
    - Duplicated properties are *NOT* permitted.
    - *Last* same properties are alive.  
`, '\n')


let array1: number[] = [ 1 ]
let array2: number[] = [ 1, 2, 3 ]

// "...": To spread all items in an Array.  (***)
//        Duplicated items are permitted.   (***)
let mergedArray: number[] = [ ...array1, ...array2 ]    // Using spread operator.
console.log(mergedArray, '\n')    // [ 1, 1, 2, 3 ]

// -----------------------------------------
     
//           ---- Anonymous Interface ----
let person1: { name: string, age?: number } = { name: "Yoseph", age: 23 }
              
//           -------------- Anonymous Interface --------------
let person2: { name: string, weight?: number, height?: number } = { name: "Trinity", weight: 58.9, height: 172.5 }

// "...": To spread all properties in an Object.    (***)
//        Duplicated properties are not permitted.  (***)
//        Last same properties are alive.           (***)
let mergedPerson = { ...person1, ...person2 }
console.log(mergedPerson, '\n')   // { name: 'Trinity', age: 23, weight: 58.9, height: 172.5 }



console.groupEnd()


