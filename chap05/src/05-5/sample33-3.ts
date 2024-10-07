import { doSomething } from "./sample33-2";

console.clear()
console.group("src/05-5/sample33-3.ts")

console.debug(`
*************************************************
* 05-5. Understanding Tuple                     *
*************************************************

1. Using Type Alias For Tuple

(2) In "Functional Programming", Array is the core feature.   <--- ***
`, '\n')


// De-structuring Assignment of "ResultType" Type Alias == [ boolean, string ]
const [ result, errorMessage ] = doSomething()  // returns "ResultType" Type Alias.

console.log('\n\b', result, errorMessage, '\n') // false Some error occurs...


console.groupEnd()


