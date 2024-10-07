import { compose } from "./sample7-1";
import { f, g, h } from "./index";


console.clear()
console.group("src/08-4/sample7-2.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

1. "compose" Function
`, '\n')


// -----------------------------
// 2. Let's Combine with Functions with Arity is 1: "f", "g", "h"
// -----------------------------

// const f: <T>(x: T) => string
// const g: <T>(x: T) => string
// const h: <T>(x: T) => string

// ----------------------------------------
// To present in mathematics, f ~> g ~> h                   <--- ***
// ----------------------------------------
//                           T       R
//                         ------  ------
const composeFGH1 = compose<string, string>(h, g, f)     // OK
const composeFGH2 = compose<number, string>(h, g, f)     // OK

// console.log("2. compiseFGH:\n\n%s", composeFGH)

// -----------------------------------------

console.log(
    // The following process occurred:
    //  "x" ~> f ~> "f(x)" ~> g ~> "g(f(x))" ~ > h ~> "h(g(f(x)))"  <--- ***: by composeFGH1
    //  23 ~> f ~> "f(23)" ~> g ~> "g(f(23))" ~> h ~> "h(g(f(23))"  <--- ***: by composeFGH2

    composeFGH1('x'),     // OK, h(g(f(x)))
    composeFGH2(23),      // OK, h(g(f(23)))

    '\n'
)


// -----------------------------
// 3. Let's combine with the same function three times.
// -----------------------------

// const inc: (t: number) => number = (x: number) => x + 1     // Defined "normally" in TypeScript
// const inc = (x: number) => x + 1                            // Using "type inference"
// const inc = (x) => x + 1                                    // Using "short-hand of" "Arrow Function"
const inc = x => x + 1                                      // Using "short-hand of" "Arrow Function"

// inc: function (x) { return x + 1; }
console.log("3-1. inc: %s", inc, '\n')

const composedInc = compose(inc, inc, inc)
console.log("3-2. composedInc:\n\n%s", composedInc, '\n')

// -----------------------------------------

console.log(
    // The following process occurred:
    //  1 ~> inc ~> 2 ~> inc ~> 3 ~> inc ~> 4       <--- ***: by composedInc
    //  1 ~> (1 + 1) ~> 2 ~> (2 + 1) ~> 3 ~> (3 + 1) ~> 4

    composedInc(1),     // 4

    '\n'
)



console.groupEnd()



