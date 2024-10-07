import { StringIterable } from "./sample5-1";

console.clear()
console.group("src/06-1/sample5-2.ts")

console.debug(`
*************************************************
* 06-1. Understanding a Iterator                *
*************************************************

5. "Iterable<T>" & "Iterator<T>" interface 
`, '\n')


// Print an item sequentially in "strings" property defined in the "StringIterable" class.

for(let word of new StringIterable([ "Hello", "World", "!" ]))
    console.log(word)


console.groupEnd()


