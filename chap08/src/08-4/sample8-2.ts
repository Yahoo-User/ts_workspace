import { f, g, h } from "./index";
import { pipe } from "./sample8-1"


console.clear()
console.group("src/08-4/sample8-2.ts")

console.debug(`
******************************************
* 08-4. Function Composition             *
******************************************

2. "pipe" Function
`, '\n')


// -----------------------------
// 2. Test Code for "pipe" Function
// -----------------------------

// To present like: "x" ~> f ~> g ~> h ~> ""
//                   T       R
//                 ------  ------
const piped = pipe<string, string>(f, g, h)

// console.log("piped:\n\n%s", piped, '\n')

console.log(
    // "x" ~> f ~> "f(x)" ~> g ~> "g(f(x))" ~> h ~> "h(g(f(x)))".
    piped("x")      // "h(g(f(x)))"
)



console.groupEnd()

