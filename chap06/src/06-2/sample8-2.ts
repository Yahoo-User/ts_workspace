import { rangeGenerator } from "./sample8-1";


console.clear()
console.group("src/06-2/sample8-2.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

3. "yield" Keyword
`, '\n')


// "generator" acts with "while" pattern.

// Acting as an "Iterable<T>" (= "iterator provider").      <--- ***
let iterator = rangeGenerator(1, 3 + 1)

/*
    iterator: implements "Iterator<T>"                      <--- ***

    {
        next: [Function (anonymous)],
        throw: [Function (anonymous)],
        return: [Function (anonymous)],
        [Symbol(Symbol.iterator)]: [Function (anonymous)]
    }
*/
console.log("iterator:\n\n%s", iterator, '\n')

while(1) {
    const { value, done } = iterator.next()

    if(done) break
    console.log(value)      // 1 2 3
} // while

// -----------------------------------------

for(let value of rangeGenerator(4, 6 + 1))
    console.log(value)      // 4 5 6


console.groupEnd()


