console.clear()
console.group("src/05-2/sample20.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

7. 1² + 2² + ... + 100² = ?

(1) This time, solving a problem which processes all input data.
(2) Solving a problem in way of "Imperative Programming".
(3) To solve a probleam in way of "Declarative Programming",
    You acquire a "map" function.                                   <--- ***
`, '\n')


// -----------------------------------------
// 1. Solving a problem in way of "Imperative Programming".
// -----------------------------------------

let squareSum: number = 0

for(let value = 1; value <= 100; value++)
    squareSum += ( value * value )              // OK
    // squareSum += Math.pow(value, 2)             // OK

console.log(squareSum, '\n')          // 338350


// -----------------------------------------
// 2. Solving a problem in way of "Declarative Programming".
// -----------------------------------------

// You require a "map" function.        <--- ***



console.groupEnd()


