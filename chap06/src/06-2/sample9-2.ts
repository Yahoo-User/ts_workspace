import { IterableUsingGenerator } from "./sample9-1"


console.clear()
console.group("src/06-2/sample9-2.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

4. Implementing a "generator" that acts as a "iterable" (== "iterator generator") method
`, '\n')


// 2. Test an "IterableUsingGenerator" class. ("iterable" == "iterator provider")

for(let item of new IterableUsingGenerator<number>([1, 2, 3]))
    console.log(item)   // 1 2 3

for(let item of new IterableUsingGenerator<string>([ "Hello", "World", "!" ]))
    console.log(item)   // Hello World !



console.groupEnd()


