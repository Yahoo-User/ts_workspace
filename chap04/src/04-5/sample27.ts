import { Person } from "./sample26";

console.clear()
console.group("src/04-5/sample27.ts")

console.debug(`
*************************************************
* 04-5. Function Implementation Method          *
*************************************************

2. Abbreviating Values When Creating a Object By Object Literal

(1) In TypeScript, You can make an object that names of 'properties' equal to the names of 'parameters'. 
    This time, TypeScript provides a 'short-hand' that the *values* of properties could be abbreviated. (***)

    Example:
    
        const makePerson = (name: string, age: number) => {
            // const person = { name: name, age: age }      // Property Name == Parameter Name used as Property Value.
            const person = { name, age }                    // Short-hand of { name: name, age: age }
        } // makePerson

`, '\n')


// error ts(1015): Parameter cannot have 'question mark' and 'initializer'. 
// const makePerson = (name: string, age?: number = 10) => {    // XX

// -----------------------------------------

// Case 1
const makePerson = (name: string, age: number): Person => {          // OK
// Case 2
// const makePerson = (name: string, age?: number): Person => {         // OK
// Case 3
// const makePerson = (name: string, age: number = 22): Person => {     // OK

    console.debug("makePerson(%s, %d) invoked.", name, age)

    // const person = { name: name, age: age }
    const person = { name, age }                // Short-hand of { name: name, age: age }

    return person
} // makePerson


console.log('makePerson:\n%s', makePerson, '\n')

console.log(makePerson("Yoseph", 23))       // Case 1/2/3  - { name: 'Yoseph', age: 23 }
// console.log(makePerson("Yoseph"))           // Case 1 - XX
                                            // Case 2 - { name: 'Yoseph', age: undefined }
                                            // Case 3 - { name: 'Yoseph', age: 22 }
                                            


console.groupEnd()

