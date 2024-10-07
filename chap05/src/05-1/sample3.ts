console.clear()
console.group("src/05-1/sample3.ts")

console.debug(`
*************************************************
* 05-1. Understanding an Array                  *
*************************************************

3. Type of an Array

(1) In TypeScript, Type of an Array is "itemType[]".    <--- ***

    - Example:

        a. If an array item is "number" type, Array type is "number[]".
        b. If an array item is "string" type, Array type is "string[]".
`, '\n')


// How to attach "Type Annotation, itemType[]" to an Array.

let numArray: number[] = [ 1, 2, 3 ]
let strArray: string[] = [ "Hello", "World" ]

// -----------------------------------------

// Type Alias for an Object with properties: 'name', 'age'
type IPerson = { name: string, age?: number }   // age? : "Optional" Property

// 1. With Type Alias       - OK
let personArray: IPerson[] = [ { name: "Yoseph" }, { name: "Trinity", age: 23 } ]

// 2. Without Type Alias    - OK
// let personArray: { name: string, age?: number }[] = [ { name: "Yoseph"}, { name: "Trinity", age: 23 } ]

// [ { name: 'Yoseph' }, { name: 'Trinity', age: 23 } ]
console.log(personArray); console.table(personArray)

console.log()


console.groupEnd()


