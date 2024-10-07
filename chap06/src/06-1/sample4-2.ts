import { RangeIterable } from "./sample4-1";

console.clear()
console.group("src/06-1/sample4-2.ts")

console.debug(`
*************************************************
* 06-1. Understanding a Iterator                *
*************************************************

4. "for...of" statement & "[Symbol.iterator]" method
`, '\n')


const iterable = new RangeIterable(1, 3 + 1)
console.log("iterable:\n\n%s", iterable, '\n')  // RangeIterable { from: 1, to: 4 }

// "for...of" statement called back once "[Symbol.iterator]()" method of an "iterable" object.  <--- ***
for(let value of iterable)  // OK, Not any more error occurred.     <--- ***
    console.log(value)      // 1 2 3


console.groupEnd()


