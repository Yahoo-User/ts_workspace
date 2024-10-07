console.clear()
console.group("src/index.ts")

console.debug(`
*****************************************
* 04-1. Function Declaration            *
*****************************************

-------------------------------------
1st. Syntax : Using 'function' keyword without type annotations
-------------------------------------
function functionName(param1, param2[, ...]) {
    // functionBody
} // functionName

-------------------------------------
2st. Syntax : Using type annotations for parameters & return type 
-------------------------------------
function functionName(param1: typeAnnotation1, param2: typeAnnotation2 [, ...]): returnTypeAnnotation {
    // functionBody
} // functionName
`, '\n')


console.log('1st. syntax : Without `type annotations`.')

// Parameter 'a', 'b' implicitly has an 'any' type, but a better type may be inferred from usage. ts(7044)
function add1(a, b) {
    console.debug(`add1(${a}, ${b}) invoked.`)
    return a + b
} // add1

console.log(add1, ', typeof add1:', typeof add1)

let result1 = add1(1, 2)
console.log(result1, '\n')      // 3

// -----------------------------------------

console.log('2nd. syntax : With `type annotations` for parameters & return type.')

function add2(a: number, b: number): number {
    console.debug(`add2(${a}, ${b}) invoked.`)
    return a + b
} // add2

console.log(add2, ', typeof add2:', typeof add2)

let result2 = add2(1, 2)
console.log(result2, '\n')      // 3



console.groupEnd()


