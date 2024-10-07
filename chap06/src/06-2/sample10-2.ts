import { gen12345 } from "./sample10-1"


console.clear()
console.group("src/06-2/sample10-2.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

5. "yield*" Keyword
`, '\n')


// Test Code for "gen12345()"
for(let value of gen12345())
    console.log(value)          // 1 2 3 4 5


console.groupEnd()


