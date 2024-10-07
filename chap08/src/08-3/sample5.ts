import { FirstOrderFunc, SecondOrderFunc, ThirdOrderFunc, add, add3 } from "./sample4"

console.clear()
console.group("src/08-3/sample5.ts")

console.debug(`
******************************************
* 08-3. High-order Function & Curry      *
******************************************

2. Partial Applied Function & Curry

(1) What is a "Partial Applied Function" (= "Partial Function", for brevity )   <--- ***

    - In previous clause, We declared "High-Order Functions" and invoked them.
      This time, We showed "add(1)" or "add(1)(2)" or "add(1)(2)(3)" function call statement.

    - "High-Order Function" use the "Function Call Operator, ()"
       as many times as their "Orders" continuously.                            <--- ***

    - If "High-Order Function" uses "Function Call Operator, ()" as "less" times as their "Orders"
      like "add3(1)", "add3(1)(2)", This "High-Order Function" is said to call 
      "Partial Applied Function" or for brevity, "Partial Function".            <--- ***

(2) In previous, 2nd-Order Function, "add" function signature is "FirstOrderFunc<number, number>".
    and then could be coded like the following:

        // "add" : 2nd-Order Function, "add1" : 1st-Order Function
        // "add(1)" is a "Partial Function" or "Partial Applied Function"       <--- ***
        const add1: FirstOrderFunc<number, number> = add(1)
`, '\n')


// -----------------------------
// 1. The following code is to declare "1st-Order Function"
//    using the previoud defined "add" function ("2nd-Order" Function).
// -----------------------------

// add: 2nd-Order Function, add1: 1st-Order Function
// const add1: FirstOrderFunc<number, number> = add(1)    // add(1): "Partial (Applied) Function" 

// console.log("1. add1: %s", add1, '\n')

// -----------------------------------------

// console.log('2.',
//     add1(2),    // 3, 1st-Order Function Call
//     add(1)(2)   // 3, 2nd-Order Function Call
// )


// -----------------------------
// 2. The following code is to declare "High-Oder Functions"
//    using previous defined, "add3" function ("3rd-Order Function").
// -----------------------------

// "add3": "3rd-Order Function"
// "add3(1)" returns "2nd-Order Function" and is a "Partial (Applied) Function".
const add2: SecondOrderFunc<number, number> = add3(1)

// "add2": "2nd-Order Function"
// "add2(2)" returns "1st-Order Function" and is a "Partial (Applied) Function".
const add1: FirstOrderFunc<number, number> = add2(2)

// -----------------------------------------

console.log('3.',
    add1(3),        // 6 == add1(3) == add2(2)(3) == add3(1)(2)(3)
    add2(2)(3),     // 6 == add2(2)(3) == add3(1)(2)(3)
    add3(1)(2)(3),  // 6
    '\n'
)









console.groupEnd()

