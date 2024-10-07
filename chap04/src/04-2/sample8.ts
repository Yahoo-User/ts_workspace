console.clear()
console.group("src/04-2/sample8.ts")

console.debug(`
*****************************************
* 04-2. Function Expression             *
*****************************************

2. First-Class Function

(1) Programming Language which supports for 'first-class function' is called,
    'Functional Programming Language'.                                          <--- ***
(2) JavaScript and TypeScript Languages are Functional Programming Languages, 
    Because of supporting first-class function. (***)
(3) What is 'first-class function' ???
    => No distinguishing between 'function' and 'variable'.                     <--- ***
`, '\n')


console.log(">>> Function Expression = Anonymous Function <<<")

console.log(`
// variable, 'f' initialized by first function expression(= anonymous function)
// and then, 'f' changed    by second function expression(= anonymous function)

// Lvalue (block-scoped variable)
let f = function (a, b) { return a + b }    // Rvalue (function expression)
    f = function (a, b) { return a - b }    // Rvalue (function expression)
`)

console.log(`
In fact, Symbol 'f' can't be distinguished between variable and function.    <--- ***
Just like this means that no distinguish   between variable and function.    <--- ***
`)


console.groupEnd()

