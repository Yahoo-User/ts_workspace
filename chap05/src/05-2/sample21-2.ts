import { map } from "./sample21-1";
import { range } from "../05-1/sample13-1"
import { fold } from "./sample16-1";

console.clear()
console.group("src/05-2/sample21-2.ts")

console.debug(`
*************************************************
* 05-2. Declarative Programming and Array       *
*************************************************

8. "map": Processing Array Data

(3) To solve a problem, "1² + 2² + ... + 100² = ?" Using "map" function
    in way of "Declarative Programming". (***)
`, '\n')


// 2. To solve a problem with "map" function in way of "Declarative Programming".

let numbers: number[] = range(1, 100 + 1)

let result = fold<number>(
    // 1. map: 'x: T ~> y: Q'

    map<number, number>(numbers, (item, index) => Math.pow(item, 2)),   // OK
    // map<number, number>(numbers, (item) => Math.pow(item, 2)),          // OK
    // map<number, number>(numbers, item => item * item),                  // OK
    // map(numbers, (item, index) => item * item ),                        // OK

    // 2. callback
    (result, value) => result + value,              // OK
    // (result, value) => result += value,             // OK

    // 3. Initial value of result.
    0
)

console.log('\n\b', result, '\n')         // 338350


console.groupEnd()


