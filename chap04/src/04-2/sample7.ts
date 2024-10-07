console.clear()
console.group("src/04-2/sample7.ts")

console.debug(`
*****************************************
* 04-2. Function Expression             *
*****************************************

1. Function is the 'Object'.

(1) JavaScript is maded by the model based on the 
    1) functional language, 'scheme'
    2) prototype-based OOP language, 'self'. (***)

(2) So JavaScript has both OOP language and function language features.
(3) TypeScript also has all JavaScript features.
(4) 'Function' of the JavaScript is a instance of 'Function' class. (***)

(5) 'Function Expression' == Anonymous Function Without function name.      <--- ***
`, '\n')


// 1st. method - Function Declaration.
function sum1(a, b) { return a + b }

console.log(sum1, typeof sum1)      // [Function: sum1] function
console.log(sum1(1, 2))             // 3

// -----------------------------------------

// 2nd. method - Using `Function` class as variable declaration.    (***)
let sum2 = new Function('a', 'b', 'return a + b')
let result = sum2(1, 2)

console.log(sum2, typeof sum2)      // [Function: `anonymous`] function
console.log(result)                 // 3

// -----------------------------------------

// 3rd. method - `function expression` (== anoymous function)       (***)

// Parameter 'a' implicitly has an 'any' type, but a better type may be inferred from usage. ts(7044)
let sum3 = function (a, b) { return a + b }

console.log(sum3, typeof sum3)      // [Function: sum3] function
console.log(sum3(1, 2))             // 3



console.groupEnd()


