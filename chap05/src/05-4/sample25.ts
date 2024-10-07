console.clear()
console.group("src/05-4/sample25.ts")

console.debug(`
*************************************************
* 05-4. Pure Function and Array                 *
*************************************************

1. What is a Pure Function ?

(1) "Pure Function" means the function *NO* having side-effects.        <--- ***
    - Here, side-effects means that other effects except unique purpose of the function appeared. (***)
(2) "Impure Function" means a function having side-effects.             <--- ***
(3) "Side-effects" occurred in the "Functional Programming" could be removed
    *ONLY* if a function must be implemented as a "Pure Function".      <--- ***
(4) A function could be a "Pure Function"
    *ONLY* if the function satisfies the following conditions:

    ① No "I/O" codes in function "body".
    ② No parameters changed in function "body".
       (That is, parameters must be *ONLY* "const" OR "readonly" )
    ③ Function must *IMMEDIATELY* return a result made in function "body".
    ④ No "global" or "static" variables used inside function.
    ⑤ No function raises "Errors".
    ⑥ No function made as a "Callback" function OR 
       No codes using "Callback" functions in function "body".
    ⑦ No asynchronous codes like "Promise" in function "body".

    - Example: 
    
        the following function is a "Pure function" satisfied with the above conditions;

            function pure(a: number, b: number): number { return a + b }
`, '\n')


// 1. "Pure Function" Example

function pure(a: number, b: number): number { return a + b }

console.log("pure: %s", pure, '\n')     // function pure(a, b) { return a + b; }

// -----------------------------------------

// 2. "Impure Function" Example

let g = 10      // "Global" variable

// ④ No "global" or "static" variables used inside function.
function impure2(x: number) { return x + g }

console.log("impure2: %s", impure2)     // function impure2(x) { return x + g; }



console.groupEnd()


