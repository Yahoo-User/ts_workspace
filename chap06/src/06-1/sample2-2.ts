import { createRangeIterable } from "./sample2-1";

console.clear()
console.group("src/06-1/sample2-2.ts")

console.debug(`
*************************************************
* 06-1. Understanding a Iterator                *
*************************************************

2. "iterator" & "iterable" (== "iterator provider")

(4) We can get a "iterator" *ONLY* in case of invoking "iterable" (= "iterator provider")
    - In TypeScript, "for...of" statement converted into the codes with "iterable" and "iterator"
      by "tsc" compiler. <--- ***
`, '\n')


const iterator = createRangeIterable(1, 3 + 1)
console.log("iterator: %s", iterator, '\n')               // { next: [Function: next] }

while(true) {   // Infinite loop
    const { value, done } = iterator.next()
    
    if(done) break          // Escape Condition
    console.log(value)      // 1 2 3
} // while

console.log('\n\b', "Done.", '\n')


console.groupEnd()


