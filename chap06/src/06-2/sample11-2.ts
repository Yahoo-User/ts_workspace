import { gen, random } from "./sample11-1";


console.clear()
console.group("src/06-2/sample11-2.ts")

console.debug(`
*************************************************
* 06-2. Understanding Generator                 *
*************************************************

6. "yield returnValue"
`, '\n')


const iterator = gen()

while(true) {
    // The argument of the "Iterator<T>.next" method
    // pass to the "yield" statement as a return value of the stopped "yield" operator. <--- ***
    const { value, done } = iterator.next( random(10, 1) )
    // console.log('value: %s, done: %s', value, done)  // OK

    if(done) break
    console.log(value)
} // while


console.groupEnd()


