console.clear()
console.group("src/08-4/sample10.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

4. "Partial (Applied) Function" and "Function Composition"

(1) "Partial (Applied) Function" of "High-Order Function" could be used in "Function Composition".  <--- ***
`, '\n')


// -----------------------------
// 1. The following code shows that
//    "Partial (Application) Function" used in "Function Composition"
// -----------------------------

import { pipe } from "./sample8-1"


// High-Order Functon

// const add = x => y => x + y          // 2rd-Order Function, "x" : Free Variable

// ts(7044) - Parameter 'y' implicitly has an 'any' type, 
//            but a better type may be inferred from usage.

// a. (x + y)                   : Expression -> return a value(= Scalar).
// b. ( y => ( x + y ) )        : Function Expression => return a 1st-order function.
// c. x => ( y => ( x + y ) )   : Function Expression => return a 2nd-order function.
// const add = x => ( y => ( x + y ) )

// const add = (x: number) => (y: number) => x + y
const add = (x: number) => ( (y: number) => x + y )

// add: function (x) { return function (y) { return x + y; }; }
console.log("1. add: %s", add, '\n')

// -----------------------------------------

const inc = add(1)      // add(1) : "Partial (Applied) Function", Returns "1st-order function"

// inc: function (y) { return x + y; }
console.log("2. inc: %s", inc, '\n')

// -----------------------------------------

const add3 = pipe(
    inc,                // 1st-order function
    add(2)              // Parial (Applied) Function, 1st-order function
)

/*
    add3:

    function (x) {
        console.debug("* pipe(functions: %s, x: %s) invoked.", functions, x);
        return functions.reduce(function (value, func) { return func(value); }, x); // No "reverse" of "functions".
    }
*/
console.log("3. add3:\n\n%s", add3, '\n')

// -----------------------------------------

console.log(
    // 1 ~> inc ~> 2 ~> add(2) ~> 4
    // 1 ~> inc ~> add(1) ~> add(1)(1) ~> 2 ~> add(2) ~> add(2)(2) ~> 4
    add3(1)
)



console.groupEnd()




