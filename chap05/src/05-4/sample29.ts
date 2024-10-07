console.clear()
console.group("src/05-4/sample29.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

5. Spread Operator and Deep Copy

(1) Interestingly, "Array" Copying through "Spread Operator" is "Deep Copy".    <--- ***
`, '\n')



// 1. "Array Deep Copy" Through "Spread Operator".

const originArray = [ 1, 2, 3, 4 ]

const targetArray = [ ...originArray ]          // Copied through "Deep Copy". (***)
targetArray[0] = 100

console.log("1.", originArray, targetArray, '\n')     // [ 1, 2, 3, 4 ] [ 100, 2, 3, 4 ]

// -----------------------------------------

// 2. Array Copy with Simple "Assignment Operator".

const originArray2 = [ 1, 2, 3, 4 ]

const targetArray2 = originArray2
targetArray2[0] = 100

console.log("2.", originArray2, targetArray2, '\n')   // [ 100, 2, 3, 4 ] [ 100, 2, 3, 4 ]



console.groupEnd()


