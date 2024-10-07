import { test1, test2 } from "./sample13-1";


console.clear()
console.group("src/07-3/sample13-2.ts")

console.debug(`
*************************************************
* 07-3. async / await sentence                  *
*************************************************

2. "async" Function Modifier

(2) A function with "async" function modifier have the following features:
    a. Can be used as a "general" function.     <--- ***
    b. Can be used as a "Promise" object.       
`, '\n')


// The result of the below invoking two functions seems
// that these are executed "asynchronously" & "simultaneously",
// *NOT* "sequentially": test1 by test2.  <--- ***


// 1. "async" function through "arrow function" used as a "general" function.
test1()     // 1 hello ???

// -----------------------------------------

// 2. "async" function through "function" keyword used as a "general" function.
test2()     // 1 ??? hello



console.groupEnd()


